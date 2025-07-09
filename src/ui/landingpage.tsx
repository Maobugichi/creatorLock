import Gettoknow from "./gettoknow"
import { Hero } from "./hero"
import { LandingNav } from "./landingNav"
import { Feature } from "./features"
import { Testimonial } from "./testimonial"
import PricingSection from "./pricing"
import FAQSection from "./faqs"
import { Footer } from "./footer"


export const LandingPage = () => {
    return(
        <main className="h-fit overflow-x-hidden  min-h-screen text-black font-cursive">
          <LandingNav/>
          <Hero/>
          <Feature/>
          <Gettoknow/>
          <Testimonial/>
          <PricingSection/>
          <FAQSection/>
          <Footer/>
        </main>
    )
}