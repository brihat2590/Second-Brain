"use client"
import { useRef } from 'react';
import axios from 'axios';
import Button from "../Components/Button"

import { BACKEND_URL } from '../config/config';
import { Input } from '../Components/Input';
import { useNavigate } from 'react-router-dom';

export  default function SignUp() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signup() {
      const username = usernameRef.current?.value;
      console.log(usernameRef.current)
      const password = passwordRef.current?.value;
      await axios.post(BACKEND_URL + "/api/v1/signup", {
          username,
          password
      })
      navigate("/signin")
      alert("You have signed up!")
  }

  return(
    <div>
        <h2 className='flex justify-center items-center text-3xl mt-12'>Welcome to the signup page</h2>

        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
       
            <div className="bg-white rounded-xl border min-w-48 p-8">
            <Input reference={usernameRef} placeholder="Username" />
            <Input reference={passwordRef} placeholder="Password" />
           <div className="flex justify-center pt-4">
               <Button onClick={signup}  variant="primary" text="Signup"  />
           </div>
       </div>
   </div>
    </div>
  )
}
