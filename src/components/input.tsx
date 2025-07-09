interface InputProps {
    name:string;
    type:string;
    value:string;
    className:string;
    placeholder:string
}

export const Input:React.FC<InputProps> = ({name, type, value , className, placeholder}) => (<input name={name} value={value} className={className} type={type} placeholder={placeholder}/>)