import { Button } from "../components/button"

export const NavButton = () => {
    const details = [
        {
            content:'About',
            className:'rounded-4xl bg-black w-[40%] h-[60%]'
        },
        {
            content:'Dashboard',
            className:'bg-black h-full w-[55%] text-lg'
        }
    ]

    return(
        <div className="w-62 flex items-center justify-between">
            {details.map((detail:{content:string, className:string}) => <Button className={`${detail.className} text-white`} content={detail.content}/>)}
        </div>
    )
}