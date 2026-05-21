import HeroSlider from "./ui/HeroSlider";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-24">
      <div className="absolute inset-x-0 top-0 h-full bg-[radial-gradient(circle_at_top_left,_rgba(212,166,42,0.18),_transparent_32%),linear-gradient(180deg,_#EEF4FF_0%,_#F8FAFC_100%)]" />
      <div className="container relative z-10 mx-auto px-6 text-center">
        <HeroSlider />
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-3">
          {[
            ["Hospitals", "Connected clinical workflows"],
            ["Insurers", "Cleaner claims operations"],
            ["Patients", "Simpler access to care"],
          ].map(([title, text]) => (
            <div
              key={title}
              className="rounded-card border border-[#D0D5DD] bg-surface/90 px-5 py-4 text-left shadow-sm"
            >
              <p className="text-[14px] font-semibold uppercase tracking-[0.08em] text-secondary-500">
                {title}
              </p>
              <p className="mt-2 text-[16px] font-semibold text-text-primary">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
