import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState } from 'react';
import { Cta } from './heroCta';

const FAQSection = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const faqs = [
    {
      question: 'How does CreatorLock keep my work safe?',
      answer: 'We use top-tier encryption and secure cloud storage to lock down your content from prying eyes.',
    },
    {
      question: 'Which platforms vibe with CreatorLock?',
      answer: 'CreatorLock syncs effortlessly with Patreon, YouTube, TikTok, and more via our slick API.',
    },
    {
      question: 'Can I test CreatorLock for free?',
      answer: 'You bet! Dive into our free plan to explore core features with zero strings attached.',
    },
  ];

  const toggleFlip = (index:any) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="py-16 font-poppins  text-white">
      <div className="container mx-auto px-4">
        <motion.h2
          className=" font-extrabold text-center mb-16 text-black text-4xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Got Questions? We’ve Got Answers!
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-[90%] mx-auto">
          {faqs.map((faq, index) => {
            const isFlipped = flippedIndex === index;
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const rotateX = useTransform(y, [-100, 100], [10, -10]);
            const rotateY = useTransform(x, [-100, 100], [-10, 10]);

            return (
              <motion.div
                key={index}
                className={`relative h-64 w-full rounded-3xl shadow-2xl overflow-hidden cursor-pointer ${
                  isFlipped ? 'bg-gray-900' : 'bg-black'
                }`}
                style={{
                  transformPerspective: 1000,
                  rotateX: isFlipped ? 0 : rotateX,
                  rotateY: isFlipped ? 0 : rotateY,
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, type: 'spring', stiffness: 300, damping: 25 }}
                drag={!isFlipped}
                dragConstraints={{ left: -30, right: 30, top: -30, bottom: 30 }}
                dragElastic={0.2}
                onDrag={(_, info ) => {
                  if (!isFlipped) {
                    x.set(info.point.x / 10);
                    y.set(info.point.y / 10);
                  }
                }}
                onDragEnd={() => {
                  x.set(0);
                  y.set(0);
                  return { x: 0, y: 0 };
                }}
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)' }}
                onClick={() => toggleFlip(index)}
              >
                <motion.div
                  className="absolute inset-0 flex items-center justify-center p-6"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.5, type: 'spring', stiffness: 300, damping: 20 }}
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  <div
                    className="absolute inset-0 flex items-center justify-center p-6 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <h3 className="text-xl font-bold text-center">{faq.question}</h3>
                  </div>
                  <div
                    className="absolute inset-0 flex items-center justify-center p-6 bg-gray-900 backface-hidden"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <p className="text-lg text-center text-white font-medium">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          className="text-center  mt-12 relative md:w-[30%]  mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
         <Cta/>
        </motion.div>
      </div>
      <style >{`
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </section>
  );
};

export default FAQSection;