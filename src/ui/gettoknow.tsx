import { Header } from "../components/header"
import { Arc } from "./arc"
import { CardSpread } from "./cardSpread"

const Gettoknow = () => {
    return(
        <div className=" grid place-items-center gap-10 h-[140vh] mt-10 p-3 relative text-black">
            <Header level={2} className="text-3xl lg:text-5xl font-bold text-center lg:h-20 font-poppins">
                Got a head full of genius ideas?
            </Header>
            <CardSpread/>
            <Arc/>
        </div>
    )
}

export default Gettoknow