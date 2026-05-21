const operations = [
  {
    title: "Clinical teams",
    description:
      "Digitize patient records, appointments, pharmacy, laboratory, billing, and reporting in one connected workflow.",
  },
  {
    title: "Health insurers",
    description:
      "Manage enrollee operations, provider networks, tariffs, authorizations, and claims with better visibility.",
  },
  {
    title: "Patients",
    description:
      "Give people easier access to health records, appointments, provider communication, and care updates.",
  },
];

export default function Operations() {
  return (
    <section className="bg-[#FBFCFE] py-16 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl">
          <p className="text-[16px] font-semibold uppercase tracking-[0.08em] text-[#6658F4]">
            Operations
          </p>
          <h2 className="mt-3 text-[32px] font-bold leading-tight text-[#051438] lg:text-[44px]">
            One digital health layer for connected care delivery.
          </h2>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
          {operations.map((item) => (
            <article
              key={item.title}
              className="rounded-[8px] border border-[#DFE2E9] bg-white p-6 shadow-sm"
            >
              <h3 className="text-[22px] font-semibold text-[#051438]">
                {item.title}
              </h3>
              <p className="mt-4 text-[16px] font-medium leading-7 text-[#677597]">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
