import { useState, useEffect,useRef } from "react";
import { motion } from "motion/react";
import avatar from "../assets/card-img.png"
import test from "../assets/wadi.png"
import wale from "../assets/prev.png"

type CardStackProps = {
    id:number,
    content:string;
    className:string;
    name:string;
    src:string
}

const cards: CardStackProps[] = [
  {
    id: 1,
    content: `"CreatorLock has been a total lifesaver. As a freelance photographer, I used to worry about clients reusing my images without payment or credit. Now, not only is my work protected, but I also get notified when it’s being used and can track every transaction. I’ve earned more in 2 months than I did all last year."`,
    name: "Chika Madueke, Abuja",
    className: 'bg-[#000000] text-white',
    src:avatar
  },
  {
    id: 2,
    content: `"Being an independent music artist in Nigeria is tough — too many middlemen, delayed payments, and copyright theft. CreatorLock helped me drop my EP and monetize it immediately with no stress. My fans stream directly, and I get paid fast. It's the best thing to happen to the creative scene here."`,
    name: "David Okon, Lagos",
    className: 'bg-[#1A1A1A] text-white',
    src:test
  },
  {
    id: 3,
    content: `"I design brand identities and social content for small businesses. Before CreatorLock, clients would ghost me or reuse my drafts. Now, they can only access the final files after full payment, and I have full visibility on every asset. It's the kind of protection every creative deserves."`,
    name: "Aisha Bello, Kaduna",
    className: 'bg-[#1E293B] text-white',
    src:wale
  },
];



export const StackedCards = () => {
    const [ cardStack , setCardStack ]= useState<CardStackProps[]>(cards);
    const intervalRef = useRef<number | null>(null)
    const constraintsRef = useRef(null)
    const moveTopCardBack = () => {
        const [ top, ...rest ] = cardStack;
        setCardStack([...rest , top ])
    }

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            moveTopCardBack()
        },4000);

        return () => {
            if (intervalRef.current) {
                clearInterval(intervalRef.current)
            }
        }
    },[cardStack])

    return(
        <div ref={constraintsRef} className="font-poppins relative w-[90%] lg:w-[80%] h-96 mx-auto mt-20 ">
            {
                cardStack.map((card:CardStackProps,index:number) => {
                    const isTop = index === 0;
                    const z = cards.length - index
                    return(
                         <motion.div
                            key={card.id}
                            className={`absolute w-full h-full rounded-2xl shadow-xl cursor-pointer flex flex-col  p-5 lg:text-xl font-bold ${card.className} ${isTop ? 'opacity-100' : 'opacity-75'}`}
                            style={{
                                zIndex:z,
                                top:index * -25,
                                scale:1 - index * 0.04
                            }}
                            drag={isTop ? 'x' : false}
                            dragConstraints={constraintsRef}
                            dragDirectionLock
                            onDragEnd={() => {
                            
                                moveTopCardBack();
                                return { x: 0 };
                            
                            }}
                            whileTap={isTop ? { scale: 0.95 } : {}}
                            animate={{ x: 0, y: isTop ? 0 : -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                         >
                            <div className="bg-white rounded-full ml-5 h-14 w-14 grid place-items-center">
                                 <img
                                src="https://flagcdn.com/40x30/ng.png"
                                srcSet="https://flagcdn.com/80x60/ng.png 2x,
                                    https://flagcdn.com/120x90/ng.png 3x"
                                width="30"
                                height="30"
                                alt="Nigeria"></img>
                            </div>
                           <div className="flex items-center  justify-between gap-5 w-[85%] mx-auto h-[70%]">
                             <p className="lg:text-[18px] text-[11px] tracking-wide lg:leading-7  w-[65%]"> {card.content}</p>
                             <img src={card.src} className="h-1/2 md:h-full w-[35%]"/>
                           </div>
                           <p className="pl-20 h-10 text-[#ccc]">{card.name}</p>
                        </motion.div>
                    )
                })
            }
         
        </div>
        
    )
}