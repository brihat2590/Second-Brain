import TwitterIcon from "../icons/TwitterIcon";
import SidebarItem from "./SidebarItem";
import YoutubeIcon from "../icons/YoutubeIcon";
import BrainIcon from "../icons/BrainIcon";
import Githubicon from "../icons/githubicon";
import VideoIcon from "../icons/VideoIcon";
import Docunments from "../icons/Docunments";



export function Sidebar() {
    return (
      <div className="w-72 h-screen bg-white border-r fixed  shadow-lg pl-7">
        {/* Header Section */}
        <div className="flex items-center text-3xl font-bold pl-6 pt-8 space-x-2">
          <div className="">
            <BrainIcon />
          </div>
          <span>Brainly</span>
        </div>
  
        {/* Menu Items */}
        <div className="pt-10">
          <SidebarItem text="Twitter" icon={<TwitterIcon />} />
          <SidebarItem text="YouTube" icon={<YoutubeIcon />} />
          <SidebarItem text="GitHub" icon={<Githubicon />} />
          <SidebarItem text="Videos" icon={<VideoIcon />} />
          <SidebarItem text="Documents" icon={<Docunments />} />
        </div>
      </div>
    );
  }
  
 
  