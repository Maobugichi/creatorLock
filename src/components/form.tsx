interface FormProps {
  children:React.ReactNode;
  className:string;
}

export const Form:React.FC<FormProps> = ({children , className}) => (<form className={`${className}`}>{children}</form>)