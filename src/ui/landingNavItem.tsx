import { List } from "../components/list"

export const ListItem = () => {
    const listItems = ['Discover' , 'Blog' ,'Pricing','Features']
    return(
        <ul className="flex text-lg justify-between items-center  w-1/2">
            {listItems.map((item:string) => <List content={item} className=""/>)}
        </ul>
    )
}