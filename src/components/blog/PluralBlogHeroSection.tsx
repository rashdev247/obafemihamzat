import React from "react";
const BLOB_URL = process.env.NEXT_PUBLIC_BLOB_API_URL;
const blogbg = `${BLOB_URL}/images/blogbg.webp`;
import Navbar from "../Navbar";
import { motion } from "framer-motion";
// import { Controller, useForm } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { z } from "zod";
// import TextInput from "../ui/TextInput";

// const schema = z.object({
//   email: z.string().min(1, "Email is required").email("Invalid email address"),
// });

// type BlogSubscription = z.infer<typeof schema>;
const PluralBlogHeroSection = () => {
  // const {
  //   control,
  //   handleSubmit,
  //   formState: { errors },
  //   reset,
  // } = useForm<BlogSubscription>({
  //   resolver: zodResolver(schema),
  //   mode: "onChange",
  //   defaultValues: {
  //     email: "",
  //   },
  // });
  // const onSubmit = async (data: BlogSubscription) => {
  //   console.log(data);
  //   reset();
  // };
  return (
    <div
      style={{
        backgroundImage: `url(${blogbg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="relative h-[520px] overflow-hidden lg:h-[460px]"
    >
      <div className="absolute w-full">
        <Navbar />
      </div>
      <div className="flex flex-col justify-between items-center gap-7 h-full px-6">
        <section className="relative z-10 pt-32 text-center lg:pt-36">
          {/* Headline Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-[36px] md:text-[64px] leading-11 font-bold sm:font-semibold text-[#051438] w-full max-w-[1110px] mx-auto sm:leading-[70px] mb-3"
          >
            Insights for Modern Healthcare
          </motion.h1>

          {/* Subheading Animation */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="text-[18px] md:text-[24px] font-semibold text-[#677597] max-w-[1040px] mx-auto mb-6"
          >
            Expert insights, trends, and innovations transforming healthcare delivery and patient care.
          </motion.p>
          {/* Email Subscription Form - Commented Out */}
          {/* <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex justify-start sm:justify-center flex-wrap sm:flex-nowrap items-center gap-4"
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <div className="w-full sm:max-w-[360px] h-fit flex flex-col relative">
                  <TextInput
                    {...field}
                    placeholder="Enter your email"
                    withoutIcon={true}
                  />
                  <div className="relative">
                    {errors.email && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-500 text-[12px] font-medium absolute text-left"
                      >
                        {errors.email.message}
                      </motion.p>
                    )}
                    {!errors?.email?.message && (
                      <p className="absolute hidden sm:block text-left sm:top-1 font-medium text-[0.875rem] text-[#677597]">
                        We care about your data in our privacy policy
                      </p>
                    )}
                  </div>
                </div>
              )}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#0B0C7D] text-white mt-2 w-full sm:w-fit sm:mt-0 text-[1rem] px-4 py-2 rounded-[10px] border border-[#0B0C7D] font-semibold transition cursor-pointer"
            >
              Subscribe
            </motion.button>
            <p className="text-left top-1 sm:hidden font-medium text-[0.875rem] text-[#677597]">
              We care about your data in our privacy policy
            </p>
          </form> */}
        </section>
      </div>
    </div>
  );
};

export default PluralBlogHeroSection;
