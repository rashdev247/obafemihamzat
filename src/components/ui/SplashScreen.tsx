import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";
import IconCurlSplashbg from "../IconComponents/IconCurlSplashbg";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const completeSplash = () => {
      setIsVisible(false);
      onComplete();
    };

    // Fallback: hide splash after 6s
    const timer = setTimeout(completeSplash, 4000);

    // Also complete when route starts changing
    router.events.on("routeChangeStart", completeSplash);

    return () => {
      clearTimeout(timer);
      router.events.off("routeChangeStart", completeSplash);
    };
  }, [router, onComplete]);

  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 z-1000 flex h-screen w-screen items-center justify-center bg-white overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.6, 1, 0.6],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <IconCurlSplashbg />
      </motion.div>
      <div>
        <div className="z-100 flex flex-row items-center justify-center">
          <motion.div
            animate={{
              opacity: [0.82, 1, 0.82],
              scale: [0.96, 1.06, 0.96],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="rounded-[15.89px] bg-white p-3 shadow-[0_18px_55px_rgba(7,47,107,0.14)]"
          >
            <Image
              src="/logo.webp"
              alt="Obafemi Hamzat campaign logo"
              width={96}
              height={96}
              priority
              className="h-20 w-20 object-contain"
            />
          </motion.div>
        </div>
        <p className="mt-4 hidden rounded-[15.89px] bg-[#CCF4FF] px-6 py-[12px] text-center text-[20px] font-bold text-[#063B2E] md:block">
          Obafemi Hamzat 2027 | For A Greater Lagos
        </p>
        <p className="mt-4 rounded-[15.89px] bg-[#CCF4FF] px-6 py-[12px] text-center text-[18px] font-semibold text-[#063B2E] md:hidden">
          For A Greater Lagos
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
