import { motion } from "motion/react";
import { Header } from "../components/header";
import { Paragraph } from "../components/paragraph";
import { FeatureCard } from "./featureCard";

export const Feature = () => {
  return (
    <section className="h-fit lg:h-[160vh] font-inter flex flex-col justify-center gap-5 text-black  text-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, type: 'spring', stiffness: 300, damping: 25 }}
      >
        <Header
          level={2}
          className="w-[85%] mx-auto lg:h-16 text-3xl lg:text-5xl font-semibold "
        >
          Forge Your Own Path
        </Header>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
      
      >
        <Paragraph
          className="font-inter text-md w-[90%] lg:text-xl lg:w-[70%] mx-auto "
          content={
            <>
              Whether you're chasing <span className="text-pink-400">freedom</span>, <span className="text-pink-400">flexibility</span>, or just extra income, CreatorLock makes it easy to start earning from what you already know. You don’t need to be a techie. You don’t need a business plan. Just share your skills, set up your link, and start <span className="text-pink-400">getting paid</span>.
            </>
          }
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 300, damping: 25 }}
        className="w-full"
      >
        <FeatureCard />
      </motion.div>
    </section>
  );
};