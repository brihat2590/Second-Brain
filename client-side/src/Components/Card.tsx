import { ShareIcon } from "../icons/shareIcon";
interface CardProps{
    title:string,
    link:string,
    type:"twitter"|"youtube"
}

export default function Card({title,link,type}:CardProps){
    return(
        <div className="bg-white  shadow-md border 
        border-slate-200 max-w-96 rounded-md p-8">
            <div className="flex justify-between items-center">
                <div className="flex text-lg font-semibold">
                    <ShareIcon/>
                    <div className="pr-2"></div>
                    {title}
                    
            
                </div>
                <div className="flex">
                    <a href={link} target="_blank">
                        <ShareIcon/>
                    </a>
                    
                    <div className="pr-1"></div>
                    <ShareIcon/>
                </div>
            </div>
            <div className="p-4"></div>
            {type==="youtube" &&<iframe className="w-full" src={link.replace("watch","embed")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>}
            {type==="twitter" && <blockquote className="twitter-tweet"><p lang="en" dir="ltr">Off to a million. Thankyou everyone ❤️ <a href="https://t.co/7K6LycanxU">pic.twitter.com/7K6LycanxU</a></p>&mdash; Harkirat Singh (@kirat_tw) <a href="https://twitter.com/kirat_tw/status/1633685473821425666?ref_src=twsrc%5Etfw">March 9, 2023</a></blockquote>} <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>




        </div>
    )
}