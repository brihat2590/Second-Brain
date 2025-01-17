import { useState } from "react"
import Button from "../Components/Button"
import Card from "../Components/Card"
import CreateContentModel from "../Components/CreateContentModel"
import { PlusIcon } from "../icons/plusIcon"
import { ShareIcon } from "../icons/shareIcon"
import { Sidebar } from "../Components/Sidebar"
import useContent from "../hooks/useContent"



function Dashboard() {
  const[modalOpen,setModalOpen]=useState(false)
  const content=useContent();
  //getting all the links from the backend


  return (
    <div>
      <Sidebar/>

    <div className="p-4 ml-72 min-h-screen bg-gray-100">
      <div>
        <CreateContentModel open={modalOpen} onClose={()=>{
          setModalOpen(false)
        }}/>
      </div>
      <div className="flex justify-end gap-2">

        <Button variant="primary" text="Share brain" startIcon={<PlusIcon/>}   ></Button>
        <Button  variant="secondary" text="Add Content" startIcon={<ShareIcon/>}  onClick={()=>{
          setModalOpen(true)
        }} />
      </div>
      
      
      <div className="flex gap-4 flex-wrap">
        
        {content.map(({type,link,title})=><Card type={type} link={link} title={title}/>)}
        {/* <Card type="twitter" link="https://x.com/kirat_tw/status/1633685473821425666" title="First tweet"/> */}
        
      </div>
      
      
    
  </div>  

    </div>
    
    
  )
}

export default Dashboard