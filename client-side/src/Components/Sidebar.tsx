import TwitterIcon from "../icons/TwitterIcon";
import SidebarItem from "./SidebarItem";
import YoutubeIcon from "../icons/YoutubeIcon";
import BrainIcon from "../icons/BrainIcon";



export function Sidebar(){
    return(
        <div className="w-72 h-screen border-r bg-white fixed left-0 top-0 border-2 pl-6">
            
            <div className="flex text-2xl pl-5 pt-8">
                <div className="pr-2 text-purple-800 "><BrainIcon/></div>
                
                Brainly
                </div>
            <div className="pt-8 pl-4">
                <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
                <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>
                
            </div>

        </div>
    )
}