/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import IconCurlSplashbg from "../IconComponents/IconCurlSplashbg";
import AppIconPlural from "../IconComponents/AppIconPlural";
import PlateaumedAppIcon from "../IconComponents/PlateaumedAppIcon";
import SplashArrow from "../IconComponents/SplashArrow";

const SplashScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const completeSplash = () => {
      setIsVisible(false)
      onComplete()
    }

    // Fallback: hide splash after 6s
    const timer = setTimeout(completeSplash, 4000)

    // Also complete when route starts changing
    router.events.on("routeChangeStart", completeSplash)

    return () => {
      clearTimeout(timer)
      router.events.off("routeChangeStart", completeSplash)
    }
  }, [router, onComplete])

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
        <div className="z-100 flex flex-row items-center gap-4 justify-center">
          <motion.div
            animate={{
              opacity: [1, 0, 1],
              x: [0, -40, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="bg-white rounded-[15.89px]"
          >
            <PlateaumedAppIcon />
          </motion.div>
          <SplashArrow />
          <motion.div
            animate={{
              opacity: [0, 1, 0],
              x: [40, 0, 40],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="bg-white rounded-[15.89px]"
          >
            <AppIconPlural />
          </motion.div>
        </div>
        <p className="mt-4 hidden md:block text-center text-[20px] font-bold text-[#6658F4] bg-[#CCF4FF] rounded-[15.89px] px-6 py-[12px]">
          Plateaumed is now Plural! A new name for the future of connected
          healthcare
        </p>
         <p className="mt-4 md:hidden text-center text-[18px] font-semibold text-[#6658F4] bg-[#CCF4FF] rounded-[15.89px] px-6 py-[12px]">
          Plateaumed is now Plural!
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
