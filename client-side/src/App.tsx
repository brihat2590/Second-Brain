import { useState } from "react"
import Button from "./Components/Button"
import Card from "./Components/Card"
import CreateContentModel from "./Components/CreateContentModel"
import { PlusIcon } from "./icons/plusIcon"
import { ShareIcon } from "./icons/shareIcon"
import { Sidebar } from "./Components/Sidebar"


function App() {
  const[modalOpen,setModalOpen]=useState(true)
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
      
      
      <div className="flex gap-4">
        <Card type="twitter" link="https://x.com/kirat_tw/status/1633685473821425666" title="First tweet"/>
        <Card type="youtube" link="https://www.youtube.com/watch?v=LgoXqhuyaQo" title="bishwo"/>
      </div>
      
      
    
  </div>  

    </div>
    
    
  )
}

export default App