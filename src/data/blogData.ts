import { LegacyBlogPost } from "../types";

const BLOB_URL = process.env.NEXT_PUBLIC_BLOB_API_URL;
const presentation = `${BLOB_URL}/images/presentation.webp`;
const perspective = `${BLOB_URL}/images/perspective.webp`;
const analysepatient = `${BLOB_URL}/images/analysepatient.webp`;
const ai = `${BLOB_URL}/images/ai.webp`;
const desert = `${BLOB_URL}/images/desert.webp`;
const plant = `${BLOB_URL}/images/plant.webp`;

export const posts: LegacyBlogPost[] = [
  {
    id: 1,
    author: "Liam Carter",
    date: "15 Feb 2023",
    title: "Improving patient outcomes with engaging presentations",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    imageUrl: presentation,
  },
  {
    id: 2,
    author: "Saphia Blaka",
    date: "10 Mar 2023",
    title: "Why healthcare matters: A critical perspective",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    imageUrl: perspective,
  },
  {
    id: 3,
    author: "Ethan Fox",
    date: "5 Apr 2023",
    title: "The importance of healthcare: An in-depth analysis",
    description:
      "How do you create compelling presentations that wow your colleagues and impress your managers?",
    imageUrl: analysepatient,
  },
  {
    id: 4,
    author: "Liam Carter",
    date: "15 Feb 2023",
    title:
      "Healthcare access in rural communities: An in-depth analysis of barriers & solutions",
    description:
      "Rural residents face a healthcare desert. 80% of U.S. rural counties lack basic specialists, and hospital closures are rising...",
    imageUrl: desert,
  },
  {
    id: 5,
    author: "Saphia Lee",
    date: "10 Mar 2023",
    title:
      "The silent shift: How AI is revolutionizing diagnostic accuracy behind the scenes",
    description:
      "Radiology, pathology, and genomics generate data where human eyes fatigue. Enter AI: flag early-stage tumors in minutes...",
    imageUrl: ai,
  },
  {
    id: 6,
    author: "Ethan Brown",
    date: "5 Apr 2023",
    title: "Hospital gardens & healing: Why dirt might be the next antibiotic",
    description:
      "Horticultural therapy is gaining clinical traction. Studies show soil microbes like Mycobacterium...",
    imageUrl: plant,
  },
];
