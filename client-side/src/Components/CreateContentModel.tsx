
import axios from "axios";
import CrossIcon from "../icons/CrossIcon"
import Button from "./Button"
import {  useRef, useState } from "react";
import { Input } from "./Input";
import { BACKEND_URL } from "../config/config";
enum ContentType{
    Youtube="youtube",
    Twitter="twitter"

}

function CreateContentModel({open,onClose}:{
    open:any;
    onClose:any
}) {
    const [type,setType]=useState(ContentType.Youtube)

    
    const titleRef=useRef<HTMLInputElement>();
    const linkRef=useRef<HTMLInputElement>();
    async function addcontent(){
        const title=titleRef.current?.value;
        const link=linkRef.current?.value;
        await axios.post(`${BACKEND_URL}/api/v1/content`,{
            link,
            type,
            title
        },{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }
    )

    }

    

  return (
    <div>
        {open && <div>
            <div className="w-screen h-screen fixed bg-slate-500 opacity-70 top-0 left-0 flex justify-center ">
            
            </div>
            <div className="w-screen h-screen fixed opacity-70 top-0 left-0 flex justify-center ">
            <div className="flex flex-col justify-center ">
                <span className="bg-white opacity-100 p-4 rounded">
                   
                    <div className="flex justify-end cursor-pointer" onClick={onClose}>
                            <CrossIcon/>
                    </div>
                    <div>
                        <Input placeholder="Title" reference={titleRef} />
                        <Input placeholder="Links" reference={linkRef}/>

                        

                        
                    </div>
                    <h1 className="pt-4 text-center font-bold" >Types</h1>
                    <div className="flex justify-center items-center">
                        <Button text="Youtube" variant={type===ContentType.Youtube?"primary":"secondary"} onClick={()=>{
                            setType(ContentType.Youtube)
                        }}></Button>
                        <Button text="Twitter" variant={type===ContentType.Twitter?"primary":"secondary"} onClick={()=>{
                            setType(ContentType.Twitter)
                        }}></Button>
                    </div>
                    
                    <div className="flex justify-center items-center pt-5">
                        <Button variant="primary" text="submit" onClick={addcontent} />
                    </div>
                    

                </span>
            </div>
            
            

            
            </div>
            
            </div>}
        
    </div>
  )
}

export default CreateContentModel



