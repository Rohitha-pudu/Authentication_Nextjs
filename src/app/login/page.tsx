"use client"
import React, { useEffect } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {toast,Toaster} from "react-hot-toast"
import axios from "axios"
import Typewriter from 'typewriter-effect';




const Login = () => {
  const [user,setUser]=React.useState({
    email:"",
    password:""
  })
  const router=useRouter();
  const [loading,setLoading]=React.useState(false);
  const onLogin=async ()=>{
    try{
      setLoading(true);
    const response=await axios.post("/api/users/login",user);
    console.log(response.data);
    
    toast('Login Was Successfull!',
  {
    icon: <span role="img" aria-label="Clapping Hands">💌</span>,
    style: {
      borderRadius: '10px',
      background: 'black',
      color: '#fff',
    },
  }
);
    router.push("/profile");
    
    
    }
    catch(error:any){
      console.log("failed sign up"+error.message);
      toast('Invalid Login',
  {
    icon:<span role="img" aria-label="Clapping Hands">😑</span>,
    style: {
      borderRadius: '10px',
      background: 'red',
      color: '#fff',
    },
    duration:6000,
  }
);
    }
    finally{
      setLoading(false);
    }
  }
  const [buttonDisabled,setButtonDisabled]=React.useState(false);
  useEffect(()=>{
    if(user.email.length>0 &&user.password.length>0){
      setButtonDisabled(false);
    }
    else{
      setButtonDisabled(true);
    }
  },[user])
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2
    border-x-[240px] border-y-[50px] border-dashed 
    ">
      <Toaster position="top-center"/>
      
        {loading?<div
      className='text-[26px] font-medium' 
      >Processing.....</div>:<div
      className='text-[36px] font-bold' 
      >
        Log In
        <Typewriter
  options={{
    strings: ['Hello', 'World'],
    autoStart: true,
    loop: true,
  }}
/>

        </div>}
      <hr/>
    <label htmlFor="email" className="mt-[70px] mb-2 text-[16px] font-normal">Email</label>
    <input
    className="rounded-lg p-3 mb-2  border-[1.8px] border-black-600 focus:border-black
    focus:outline-none"
    type="email"
    id="email"

    placeholder="email"
    value={user.email}
    onChange={(e)=>setUser({...user,email:e.target.value})}
    />
    <label htmlFor="password" className="mt-3 mb-2  text-[16px] font-normal">Password</label>
    <input
    className="rounded-lg p-3 mb-2  border-[1.8px] border-black-600 focus:border-black
    focus:outline-none"
    type="password"
    id="password"
    placeholder="password"
    value={user.password}
    onChange={(e)=>setUser({...user,password:e.target.value})}
    />
    <button
    onClick={onLogin}
    className="mt-5 mb-7 rounded-lg p-3 border-[1.8px] border-black-600 focus:border-black
      focus:outline-none"
    >
      {buttonDisabled?"No LogIn":"Log In"}
    </button>
    <Link href="/signup"><span className="text-[#5f5e5e]">Dont have an account?</span><span
    className="underline"
    >
      Sign Up here</span></Link>
    </div>

  )
}

export default Login