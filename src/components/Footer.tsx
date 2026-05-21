/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import IconAddress from "./IconComponents/IconAddress";
import IconTelephone from "./IconComponents/IconTelephone";
import { SOCIAL_LINKS } from "./constants";

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white py-10 relative">
      <div className="container mx-auto px-6">
        <div
          className="flex flex-wrap w-full lg:w-auto lg:flex-nowrap rounded-card border border-white/70"
        >
          <div className="px-[48px] w-full lg:w-fit py-4 lg:border-b-0 border-white/25 flex items-center lg:border-r lg:border-white/25 justify-center">
            <img
              src="/logo.webp"
              alt="Background pattern"
              className="z-0 relative w-[142px] h-auto"
            />
          </div>
          <div className="flex flex-col justify-start flex-1/2">
            <section className="flex flex-wrap lg:w-auto lg:flex-nowrap flex-1/2">
              <nav className="flex justify-center flex-1/2 space-y-12 py-[30px] px-6 border-b flex-col lg:space-y-0 lg:space-x-10 lg:flex-row lg:border-r border-white/25">
                {[
                  {
                    href: "/our-solutions/neo-ehr",
                    label: "Neo EHR",
                    delay: "200",
                  },
                  {
                    href: "/our-solutions/neo-insure",
                    label: "Neo Insure",
                    delay: "300",
                  },
                  {
                    href: "/our-solutions/my-neo",
                    label: "myNeo Health",
                    delay: "500",
                  },
                  {
                    href: "/about-us",
                    label: "About us",
                    delay: "500",
                  },
                ].map(({ href, label }) => (
                  <Link key={href} href={href} className={``}>
                    <div className="flex items-center text-[14px]  font-medium gap-2">
                      <span>{label}</span>
                    </div>
                  </Link>
                ))}
              </nav>
              <div className="px-6 py-[25px] border-b w-full lg:w-fit border-white/25">
                <div className="text-2xl text-center lg:text-left font-semibold">
                  contact@plural.health
                </div>
              </div>
            </section>
            <div className="flex flex-wrap xl:flex-nowrap">
              <div className="flex flex-1/2 flex-wrap lg:flex-nowrap">
                <div className="px-6 py-[25px] w-full lg:w-fit border-b lg:border-b-0 lg:border-r border-white/25">
                  <div className="space-y-2">
                    <IconAddress />
                    <p className="font-semibold text-[14px]">
                      16 Durban street, Wuse 2, Abuja FCT
                    </p>
                    <p className="font-semibold text-[14px]">
                      4 - 8 Bankole Lukman street, Agungi, Lekki, Lagos
                    </p>
                  </div>
                </div>
                <div className="px-6 py-[25px] flex-1/2 border-b lg:border-b-0 lg:border-r border-white/25">
                  <div className="space-y-2">
                    <IconTelephone />
                    <p className="font-semibold text-[14px]">
                      +234 700 700 5070, +234 811 502 2222
                    </p>
                  </div>
                </div>
              </div>
              <div className="pl-6 pr-[22px] py-[25px]  w-full lg:w-auto">
                <div className="space-y-2">
                  <span className="text-[14px] font-normal">© 2025</span>
                  <div className="mt-6 flex  space-x-4">
                    {SOCIAL_LINKS?.map((value) => {
                      return (
                        <a key={value?.id} href={value?.href} target="_blank">
                          {value?.icon}
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
