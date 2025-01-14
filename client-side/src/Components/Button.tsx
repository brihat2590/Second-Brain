
import { ReactElement } from "react"
interface ButtonProps {
    variant:"primary" | "secondary";
    text:string;
    startIcon?: ReactElement;
    onClick?:()=>void;

}
const variantClasses={
    "primary":"bg-purple-600 text-white",
    "secondary":"bg-purple-200 text-purple-600",
};
const defaultClass=" px-2 py-2 rounded-md  flex items-centre justify-centre ";

export default function Button({variant,text,startIcon,onClick}:ButtonProps) {
    
  return (
    <button className={variantClasses[variant]+ "" + defaultClass} onClick={onClick}>
        <div className="pr-1"></div>
        {startIcon}
        {text}
    </button>
  )
}
