import { Header } from "../components/header"
import { Paragraph } from "../components/paragraph"
import { StackBtn } from "../components/stackedbtn"
import { cardCta } from "../object"
import { motion } from "motion/react"

export const Arc = () => {
    return (
        <div className="hidden bg-[#EAF3FA] font-poppins w-full h-[450px] p-5 lg:flex flex-col gap-5 items-center justify-center relative z-10 rounded-tl-[45%] rounded-tr-[45%] -top-42">
             <Header level={3} className="text-4xl font-semibold w-[60%] text-center">
                    At CreatorLock, we want you to experiment  a lot.
            </Header>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, type: 'spring', stiffness: 300, damping: 25 }}
            >
            <Paragraph
            content={
                <>
                With CreatorLock, you don’t need to be a techie or have it all figured out—just start with what you know, try what <span className="text-pink-400">clicks</span>, and turn your <span className="text-pink-400">spark</span> into something <span className="text-pink-400">real</span>.
                </>
            }
            className="text-xl w-[60%] mx-auto text-center "
            />
           </motion.div>
            <StackBtn className="relative w-[17%] h-16 text-white" buttons={cardCta}/>
        </div>
    )
}