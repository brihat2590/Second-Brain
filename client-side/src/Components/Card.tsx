import DeleteIcon from "../icons/DeleteIcon";
import { ShareIcon } from "../icons/shareIcon";
import StartIcon from "../icons/StartIcon";
interface CardProps{
    title:string,
    link:string,
    type:"twitter"|"youtube"
}

export default function Card({title,link,type}:CardProps){
    return(
        <div className="p-4 bg-white rounded-md border-gray-200 max-w-72  border min-h-48 min-w-72 ">
            <div className="flex justify-between ">
                <div className="flex text-lg font-semibold items-center  ">
                    <StartIcon/>
                    <div className="pr-2"></div>
                    {title}
                    
            
                </div>
                <div className="flex items-center justify-center" >
                    <a href={link} target="_blank">
                        <ShareIcon/>
                    </a>
                    
                    <div className="pr-1"></div>
                    <DeleteIcon/>
                </div>
            </div>
            <div className="pt-4 ">

                {type==="youtube" &&<iframe className="w-full flex justify-center" src={link.replace("watch","embed").replace("?v=","/")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
                {type === "twitter" && <blockquote className="twitter-tweet">
                    <a href={link.replace("x.com", "twitter.com")}></a> 
                </blockquote>}
            </div>




        </div>
    )
}