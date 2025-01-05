
import CrossIcon from "../icons/CrossIcon"
import Button from "./Button"

function CreateContentModel({open,onClose}) {
    

  return (
    <div>
        {open && <div className="w-screen h-screen fixed bg-slate-500 opacity-70 top-0 left-0 flex justify-center">
            <div className="flex flex-col justify-center ">
                <span className="bg-white opacity-100 p-4 rounded">
                   
                    <div className="flex justify-end" onClick={onClose}><CrossIcon/></div>
                    <div>
                        <Input place="Title"/>
                        <Input place="Links"/>
                        

                        
                    </div>
                    <div className="flex justify-center items-center">
                        <Button variant="primary" text="submit"/>
                    </div>
                    

                </span>
            </div>
            
            
            </div>}
        
    </div>
  )
}

export default CreateContentModel


function Input({onChange,place}:{
    onChange:()=>void,
    place:any
},){
    return(
        <div>
            <input type="text" className="px-4 py-2 border rounded m-2" onChange={onChange} placeholder={place}></input>
            

        </div>
    )
}