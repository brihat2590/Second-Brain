import Button from "./Components/Button"
import Card from "./Components/Card"
import CreateContentModel from "./Components/CreateContentModel"
import { PlusIcon } from "./icons/plusIcon"
import { ShareIcon } from "./icons/shareIcon"


function App() {
  return (
    <div className="p-4">
      <div className="flex justify-end gap-2">

        <Button variant="primary" text="Share brain" startIcon={<PlusIcon/>}   ></Button>
        <Button variant="secondary" text="Add Content" startIcon={<ShareIcon/>}   />
      </div>
      
      
      <div className="flex gap-4">
        <Card type="twitter" link="https://x.com/kirat_tw/status/1633685473821425666" title="First tweet"/>
        <Card type="youtube" link="https://www.youtube.com/watch?v=LgoXqhuyaQo" title="bishwo"/>
      </div>
      <div>
        <CreateContentModel open={true}/>
      </div>
    
  </div>  
  )
}

export default App