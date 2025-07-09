import { motion } from "motion/react";
import { Header } from "../components/header";
import { Paragraph } from "../components/paragraph";
import { Cta } from "./heroCta";
import avt from '../assets/elec3.svg'
import bank from "../assets/bank2.svg"
import { HeroBackground } from "./heroback";

export const Hero = () => {
  return (
    <section
    className="h-[100vh] relative w-full mt-20  bg-[#EAF3FA] text-black grid place-items-center ">
      <HeroBackground/>
      <div className="lg:w-[70%] h-1/2  grid mt-32 relative place-items-center lg:h-fit gap-7">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: 'spring', stiffness: 300, damping: 25 }}
        >
          <svg
           viewBox="0 0 600 400"
           xmlns="http://www.w3.org/2000/svg"
           className="absolute -top-40 lg:-top-95 left-5 w-[90%] h-auto z-0"
          >
        <path
          d="M50,250 C200,150 400,150 550,250"
          stroke="black"
          strokeWidth="8"
          fill="none"
          markerEnd="url(#arrowhead)"
        />
        <defs>
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="2"
          refY="5"
          orient="auto"
        >
          <path d="M1,3 Q11,5 1,7 Z" fill="black" />
        </marker>
        </defs>
          </svg>

          <Header className="text-5xl lg:text-7xl font-bold  h-fit text-center">
            From Idea to Dough 
          </Header>
          <img className="w-20 left-0 top-20 lg:top-0 absolute" src={avt}/>
          <img src={bank} className="w-20 right-0 top-22 lg:top-0 absolute"/>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
        >
          <Paragraph
            content={
              <>
                It doesn’t take magic—just a <span className="text-pink-400">spark</span>. Start with what you know, test the waters online, and watch your first payment hit. From zero to <span className="text-pink-400">“check your balance”</span> in no time.
              </>
            }
            className="font-inter text-md lg:text-xl w-[90%] text-center h-20 mx-auto"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 300, damping: 25 }}
          className="w-full  grid place-items-center"
        >
          <Cta />
        </motion.div>
      </div>
    </section>
  )}
