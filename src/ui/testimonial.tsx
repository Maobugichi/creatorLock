import { Header } from "../components/header"
import { StackedCards } from "./stackCards"

export const Testimonial = () => {
    return(
        <section className="grid place-items-center gap-5 h-[80vh] mt-10 lg:mt-0 lg:h-[120vh]">
         <Header level={2} className="text-3xl lg:text-5xl font-extrabold w-1/2 text-center  font-poppins">
            Trust is built with consistency
         </Header>
         <StackedCards/>
        </section>
    )
}