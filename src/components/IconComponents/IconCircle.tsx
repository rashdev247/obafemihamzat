import React from "react";
import Image from "next/image";
const BLOB_URL = process.env.NEXT_PUBLIC_BLOB_API_URL;
const curl = `${BLOB_URL}/images/curl.png`;

const IconCircle: React.FC = () => {
  return (
   <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="relative w-[1500px] h-[800px] flex items-center justify-center">
        <div
         
        >
          <Image
            src={curl}
            alt="Background pattern"
            width={1440}
            height={792}
            className="object-cover w-full"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default IconCircle;
