import { Input } from "../components/input"
import { useState } from "react"
import { Form } from "../components/form"
import { StackBtn } from "../components/stackedbtn"
import { buttons } from "../object"
export const Cta = () => {
    const [ search , setSearch ] = useState<string>('')
   
    return(
        <div className="w-[85%]  flex items-center justify-center gap-2 h-fit">
           <StackBtn className="relative h-16 w-[30%]" buttons={buttons}/>
            <Form className="h-[65px] w-[38%] grid place-items-center p-[0.5px] rounded-md  focus-within:ring-3 focus-within:ring-offset-0 focus-within:ring-blue-400">
                <Input
                    type="search"
                    name="search"
                    value={search}
                    placeholder="Waka for market..."
                    className="h-full w-[99%]  rounded-sm placeholder:text-xl placeholder:font-semibold border-2 border-solid font-semibold text-lg pl-5 focus:outline-none bg-white"
                />
            </Form>

        </div>
    )
}