import { ShareIcon } from "../icons/shareIcon";

export default function Card(){
    return(
        <div className="bg-white  shadow-md border 
        border-slate-200 max-w-96 rounded-md p-8">
            <div className="flex justify-between items-center">
                <div className="flex text-lg font-semibold">
                    <ShareIcon/>
                    <div className="pr-2"></div>
                    Project Ideas
                </div>
                <div className="flex">
                    <ShareIcon/>
                    <div className="pr-1"></div>
                    <ShareIcon/>
                </div>
            </div>
            <div className="p-4"></div>
            <iframe className="w-full" src="https://www.youtube.com/embed/pTIfeeqd6VI?si=rQe5Cx2nt4uXQfoW" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            





        </div>
    )
}