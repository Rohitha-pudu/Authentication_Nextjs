"use client"

import React, { useEffect } from "react"
import Link from "next/link"
import axios from "axios"
import { useRouter } from "next/navigation"
import { toast } from "react-hot-toast";

const SignUp = () => {
  const router=useRouter();
  const [user,setUser]=React.useState({
    email:"",
    password:"",
    username:""
})
  const [loading,setLoading]=React.useState(false);
  const onSignup=async ()=>{
    try{
      setLoading(true);
    const response=await axios.post("/api/users/signup",user);
    console.log(response.data);
    
  router.push("/login");
  toast('SignUp Was Successfull!',
  {
    icon: '👏🏻',
    style: {
      borderRadius: '10px',
      background: 'black',
      color: '#fff',
    },
    duration:6000,
  }
);
    
    }
    catch(error:any){
      console.log("failed sign up"+error.message);
      
    }
    finally{
      setLoading(false);
    }
  }
  const [buttonDisabled,setButtonDisabled]=React.useState(false);
  useEffect(()=>{
    if(user.email.length>12 &&user.password.length>5&&user.username.length>5){
      setButtonDisabled(false);
    }
    else{
      setButtonDisabled(true);
      toast('Invalid SignUp',
      {
        icon: '😴',
        style: {
          borderRadius: '10px',
          background: 'red',
          color: '#fff',
        },
        duration:6000,
      }
    );
    }
  },[user])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2
    border-x-[240px] border-y-[50px] border-dashed ">
      {loading?<div
      className='text-[26px] font-medium' 
      >Processing.....</div>:<div
      className='text-[36px] font-bold' 
      >Sign Up</div>}
      <label htmlFor="username" className="mt-[50px] text-[16px] font-normal mb-2">User Name</label>
      <input
      className="rounded-lg mb-4 p-3 border-[1.8px] border-black-600 focus:border-black
      focus:outline-none"
      id="username"
      placeholder="username"
      type="text"
      value={user.username}
      onChange={(e)=>setUser({...user,username:e.target.value})}
      />
      <label htmlFor="email" className=" text-[16px] font-normal mb-2">Email</label>
      <input
      className="rounded-lg mb-4 p-3 border-[1.8px] border-black-600 focus:border-black
      focus:outline-none"
      id="email"
      placeholder="email"
      type="text"
      value={user.email}
      onChange={(e)=>setUser({...user,email:e.target.value})}
      />
      <label htmlFor="password" className=" text-[16px] font-normal mb-2">Password</label>
      <input
      className="rounded-lg p-3 border-[1.8px] border-black-600 focus:border-black
      focus:outline-none"
      id="password"
      placeholder="password"
      type="password"
      value={user.password}
      onChange={(e)=>setUser({...user,password:e.target.value})}
      />
      <button
      onClick={onSignup}
      className="mt-7 mb-5 rounded-lg p-3 border-[1.8px] border-black-600 focus:border-black
      focus:outline-none">
       {buttonDisabled?"No SignUp":"Sign up"}
      </button>
      <Link href="/login"><span className="text-[#5f5e5e]">Don't have an account?</span><span
    className="underline"
    >
      Login here</span></Link>
    </div>
  )
}

export default SignUp