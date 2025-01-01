
import { ReactElement } from "react"
interface ButtonProps {
    variant:"primary" | "secondary";
    text:string;
    startIcon: ReactElement

}
const variantClasses={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-600",
};
const defaultClass=" px-2 py-2 rounded-md font-light flex items-centre ";

function Button({variant,text,startIcon}:ButtonProps) {
    
  return (
    <button className={variantClasses[variant]+ "" + defaultClass}>
        <div className="pr-2"></div>
        {startIcon}
        {text}
    </button>
  )
}

export default Button