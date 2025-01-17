import { useRef } from 'react';
import axios from 'axios';
import { BACKEND_URL } from '../config/config';
import Button from '../Components/Button';
import { useNavigate } from 'react-router-dom';
import { Input } from '../Components/Input';

export default function SignIn() {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  async function signin() {
      const username = usernameRef.current?.value;
      console.log(usernameRef.current)
      const password = passwordRef.current?.value;
      const response = await axios.post(BACKEND_URL + "/api/v1/signin", {
          username,
          password
      })
      const jwt = response.data.token;
      localStorage.setItem("token", jwt);
      navigate("/dashboard")
  }
  return(
    <div>
        <h2 className='mt-12 flex justify-center items-center'>Welcome to the Sign in page</h2>
        <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
         
         <div className="bg-white rounded-xl border min-w-48 p-8">
             <Input reference={usernameRef} placeholder="Username" />
             <Input reference={passwordRef} placeholder="Password" />
             <div className="flex justify-center pt-4">
                 <Button onClick={signin}  variant="primary" text="Signin"  />
             </div>
         </div>
     </div>
    </div>
  )
}
