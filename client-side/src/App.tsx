import Button from "./Components/Button"
import Card from "./Components/Card"
import { PlusIcon } from "./icons/plusIcon"
import { ShareIcon } from "./icons/shareIcon"


function App() {
  return (
    <>
      <Button variant="primary" text="Share brain" startIcon={<PlusIcon/>}   ></Button>
      <Button variant="secondary" text="Add Content" startIcon={<ShareIcon/>}   />
      <Card type="twitter" link="https://x.com/kirat_tw/status/1633685473821425666" title="First tweet"/>
    </>
    
    
  )
}

export default App