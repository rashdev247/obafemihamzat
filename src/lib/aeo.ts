import type { BlogPost } from "@/types";

export type AnswerEngineQuestion = {
  question: string;
  answer: string;
  keywords?: string[];
};

export type AnswerEngineContent = {
  summary: string;
  questions: AnswerEngineQuestion[];
  speakableSelectors?: string[];
};

type FAQSchemaOptions = {
  id: string;
  url: string;
  name: string;
  inLanguage: string;
};

const HTML_TAG_PATTERN = /<[^>]+>/g;
const WHITESPACE_PATTERN = /\s+/g;
const SENTENCE_PATTERN = /(?<=[.!?])\s+/;

export function cleanAnswerText(value: string = ""): string {
  return value
    .replace(HTML_TAG_PATTERN, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(WHITESPACE_PATTERN, " ")
    .trim();
}

export function truncateWords(value: string, maxWords: number): string {
  const cleaned = cleanAnswerText(value);
  const words = cleaned.split(" ").filter(Boolean);

  if (words.length <= maxWords) {
    return cleaned;
  }

  return `${words.slice(0, maxWords).join(" ")}...`;
}

export function mergeAnswerQuestions(
  ...groups: Array<AnswerEngineQuestion[] | undefined>
): AnswerEngineQuestion[] {
  const seen = new Set<string>();

  return groups
    .flatMap((group) => group || [])
    .map((item) => ({
      ...item,
      question: cleanAnswerText(item.question),
      answer: cleanAnswerText(item.answer),
    }))
    .filter((item) => item.question && item.answer)
    .filter((item) => {
      const key = item.question.toLowerCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
}

export function generateSpeakableSpecification(cssSelectors: string[] = []) {
  const selectors = cssSelectors.filter(Boolean);

  if (!selectors.length) {
    return undefined;
  }

  return {
    "@type": "SpeakableSpecification",
    cssSelector: selectors,
  };
}

export function generateFAQPageSchemaNode(
  questions: AnswerEngineQuestion[],
  options: FAQSchemaOptions,
) {
  const normalizedQuestions = mergeAnswerQuestions(questions);

  if (!normalizedQuestions.length) {
    return null;
  }

  return {
    "@type": "FAQPage",
    "@id": options.id,
    url: options.url,
    name: options.name,
    inLanguage: options.inLanguage,
    mainEntity: normalizedQuestions.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
      ...(item.keywords && item.keywords.length > 0
        ? { keywords: item.keywords.join(", ") }
        : {}),
    })),
  };
}

export function buildArticleAnswerSummary(post: BlogPost): string {
  const description = cleanAnswerText(post.seo?.description || post.description);

  if (description) {
    return truncateWords(description, 52);
  }

  const plainContent = cleanAnswerText(post.content);
  const firstSentences = plainContent.split(SENTENCE_PATTERN).slice(0, 2).join(" ");

  return truncateWords(firstSentences || post.title, 52);
}

export function buildArticleAnswerQuestions(
  post: BlogPost,
  authorName: string,
  canonicalUrl: string,
): AnswerEngineQuestion[] {
  const summary = buildArticleAnswerSummary(post);
  const publishedDate = cleanAnswerText(post.publishedDate);
  const categories = post.categories.filter(Boolean).join(", ");

  return mergeAnswerQuestions([
    {
      question: `What is "${post.title}" about?`,
      answer: summary,
      keywords: post.tags,
    },
    {
      question: "Who published this campaign update?",
      answer: `${authorName} published this update on the official Dr. Kadri Obafemi Hamzat campaign website${publishedDate ? ` on ${publishedDate}` : ""}.`,
    },
    {
      question: "What topics does this update cover?",
      answer: categories
        ? `This update covers ${categories}, with related campaign context for Lagos 2027.`
        : "This update covers official campaign context for the Obafemi Hamzat 2027 movement.",
      keywords: post.categories,
    },
    {
      question: "Where can readers find the canonical version?",
      answer: `The canonical version of this update is ${canonicalUrl}.`,
    },
  ]);
}
