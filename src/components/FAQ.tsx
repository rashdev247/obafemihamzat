type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  FaqList: FAQItem[];
};

export default function FAQ({ FaqList }: FAQProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[16px] font-semibold uppercase tracking-[0.08em] text-[#6658F4]">
            FAQs
          </p>
          <h2 className="mt-3 text-[32px] font-bold leading-tight text-[#051438] lg:text-[44px]">
            Common questions about Plural Health.
          </h2>
        </div>

        <div className="mx-auto mt-10 max-w-4xl divide-y divide-[#DFE2E9] rounded-[8px] border border-[#DFE2E9] bg-[#FBFCFE]">
          {FaqList.map((item) => (
            <details key={item.question} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left text-[18px] font-semibold text-[#051438]">
                {item.question}
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full border border-[#CDD8F3] text-[#0B0C7D] group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-4 text-[16px] font-medium leading-7 text-[#677597]">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
