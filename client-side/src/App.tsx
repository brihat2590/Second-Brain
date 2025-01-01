import Button from "./Components/Button"
import { PlusIcon } from "./icons/plusIcon"
import { ShareIcon } from "./icons/shareIcon"


function App() {
  return (
    <>
    <Button variant="primary" text="Share brain" startIcon={<PlusIcon/>}   ></Button>
    <Button variant="secondary" text="Add Content" startIcon={<ShareIcon/>}   /></>
    
    
  )
}

export default App