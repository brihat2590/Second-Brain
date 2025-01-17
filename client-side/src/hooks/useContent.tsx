import  { useEffect, useState } from 'react'
import { BACKEND_URL } from '../config/config'
import axios from 'axios'

function useContent() {
    const[content,setContent]=useState([])
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }).then((response)=>{
            setContent(response.data.content)
        })
            
    },[])

  return content
}
export default useContent;