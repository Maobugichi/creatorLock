import { Logo } from "../components/logo"
import { ListItem } from "./landingNavItem"
import { NavButton } from "./navButton"

export const LandingNav = () => {
    return(
        <nav className="font-inter flex justify-between  backdrop-blur-md text-black fixed top-0   z-50 w-full h-20 border-b-1  border-black">
            <Logo/>
            <div className="hidden lg:flex w-[60%] gap-5  justify-end-safe">
             <ListItem/>
             <NavButton/>
            </div>
        </nav>
    )
}