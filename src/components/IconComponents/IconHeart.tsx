import * as React from "react";
import { motion } from "framer-motion";
const IconHeart = () => (
  <motion.svg
    width={130}
    height={130}
    viewBox="0 0 130 130"
    fill="none"
    animate={{ scale: [1, 1.2, 1] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    }}
  >
    <rect width={130} height={130} fill="url(#pattern0_5993_11307)" />
    <defs>
      <pattern
        id="pattern0_5993_11307"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#image0_5993_11307" transform="scale(0.0005)" />
      </pattern>
    </defs>
  </motion.svg>
);
export default IconHeart;
