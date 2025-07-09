import { Card } from "../components/card"
import { Illustration } from "../components/illustration"
interface FeatureCardProps {
    className?:string
}

export const FeatureCard:React.FC<FeatureCardProps> = ({  }) => {
        const features = [
        {
            className: 'bg-[#EAE0FF] row-span-3 col-span-2',
            children: (
                <div className="p-4">
                    <h1 className="text-xl font-semibold mb-2">Content Security & Access Control</h1>
                    <p>Protect your digital work with secure content locking, access tokens, and built-in anti-piracy tools. Ensure that only authorized users can view or download your files, keeping your content safe from unauthorized sharing or misuse.</p>
                    <div className=" w-14 grid place-items-center border-2 rounded-full h-14 bg-[#3E3A59] place-self-end">
                      <Illustration
                        seed="secure-guardian"
                        eyebrows={["down"]}
                        mouth={["smile"]}
                        flip={true}
                        className="w-10"
                      />
                    </div>
                </div>
            )
        },
        {
            className: 'bg-[#0F0F0F] row-span-5 col-span-2 text-white',
            children: (
                <div className="p-4">
                    <h1 className="text-xl font-semibold mb-2">Fast Monetization Tools</h1>
                    <p>Turn your passion into profit by selling digital content instantly — no website, coding skills, or complex setup required. Whether you're a creator, educator, designer, or entrepreneur, you can easily upload your digital products and start monetizing them in just a few clicks. From eBooks, online courses, music, and videos to design templates, digital art, and more — deliver your value to a global audience with ease. Accept secure payments from anywhere in the world, track your sales and performance in real time, and build a sustainable income stream. Focus on doing what you love — creating — while we handle the delivery, security, and infrastructure behind the scenes</p>
                    <div className=" w-14 grid place-items-center border-2 rounded-full h-14 bg-[#FFD600] place-self-end">
                      <Illustration
                        seed="moneytization"
                        eyebrows={["up"]}
                        mouth={["laughing"]}
                        flip={true}
                        className="w-10"
                      />
                    </div>
                </div>
            )
        },
        {
            className: 'bg-[#FDEBDD] col-span-2 row-span-2',
            children: (
                <div className="p-4">
                    <h1 className="text-xl font-semibold mb-2">Secure Wallet & Earnings</h1>
                    <p>Track income in real-time. Funds are stored safely with end-to-end encryption.</p>
                    <div className="w-14 grid place-items-center border-2 rounded-full h-14 bg-[#5A0B1E] place-self-end">
                        <Illustration
                        seed="wallet-tracker"
                        eyebrows={["eyelashesDown"]}
                        mouth={["smile"]}
                        flip={true}
                        className="w-10"
                       />
                    </div>
                    
                </div>
            )
        },
        {
            className: 'bg-[#F2F4F5] col-span-2 row-span-3',
            children: (
                <div className="p-4">
                    <h1 className="text-xl font-semibold mb-2">Global Payout Options</h1>
                    <p >Withdraw your earnings in Naira, US Dollars, or popular cryptocurrencies with the freedom to choose how you get paid. Enjoy global payment flexibility and local withdrawal convenience, all from one platform. Whether your clients are nearby or overseas, receive your funds securely and without banking hassles. Get paid faster, manage your income easily, and stay in control wherever you are</p>
                    <div className="w-14 grid place-items-center border-2 rounded-full h-14 bg-[#1A1D1F]  place-self-end">
                        <Illustration
                         seed="globe-payout"
                         eyebrows={["up"]}
                         mouth={["smile"]}
                         flip={true}
                         className="w-10"
                        />
                    </div>
                    
                </div>
            )
        },
        {
            className: 'bg-[#DCF0F2] row-span-2',
            children: (
                <div className="p-2">
                    <h1 className="text-md font-semibold mb-2">Analytics & Insights</h1>
                    <p className="text-sm">Understand what sells with dashboards for views, purchases, and engagement.</p>
                    <div className="w-10 grid place-items-center border-2 rounded-full bg-[#102B38] h-10  place-self-end">
                        <Illustration
                         seed="insight-analyst"
                         eyebrows={["down"]}
                         mouth={["pucker"]}
                         flip={true}
                         className="w-7"
                        />
                    </div>
                    
                </div>
            )
        },
        {
            className: 'bg-[#F3E0F0] row-span-2',
            children: (
                <div className="p-2">
                    <h1 className="text-md font-semibold mb-2">Custom Creator Pages</h1>
                    <p className="text-sm">Build your branded storefront to showcase and monetize your content beautifully.</p>
                    <div className="w-10 grid place-items-center border-2 rounded-full h-10 bg-[#521C3D] place-self-end">
                        <Illustration
                        seed="creator-designer"
                        eyebrows={["eyelashesUp"]}
                        mouth={["smile"]}
                        flip={true}
                        className="w-7"
                        />
                    </div>
                </div>
            )
        }
        ]

    return(
        <div className="grid font-poppins grid-cols-2 lg:grid-cols-6 h-fit lg:h-[105vh]  gap-2 w-[85%] p-2 mx-auto">
          {
            features.map((feature:{className:string, children:React.ReactNode}) => <Card className={`${feature.className} text-left shadow-sm rounded-md`}>{feature.children}</Card>)
          }
        </div>
    )
}