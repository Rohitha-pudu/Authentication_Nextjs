"use client";
import axios from "axios";
import Link from "next/link";
import React, {useEffect, useState} from "react";
import {Toaster, toast} from "react-hot-toast";
import {useRouter} from "next/navigation";


export default function ProfilePage() {
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () => {
        try {
            await axios.get('/api/users/logout')
           
            router.push('/login')
            toast('Come back Soon',
            {
              icon: '😔',
              style: {
                borderRadius: '10px',
                background: 'black',
                color: '#fff',
              },
            }
          );
        } catch (error:any) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setData(res.data.data.username)
    }

    return (
        
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
             <Toaster position="top-center"/>
            <h1  className='text-[36px] font-medium mb-[30px] underline'>Profile</h1>
            <hr />
            
            <h2 className="p-1 rounded  mb-6">{data === 'nothing' ? "😴" : <Link href={`/profile/${data}`}>
            <div  className='text-[26px]  mb-[10px]'>
                Happy to see you <span  className='text-[26px]  mb-[10px] text-[#9838be]'>
                    {data}! 💙</span></div>
            </Link>}</h2>
        <hr />
        <button
        onClick={getUserDetails}
        className="bg-[#1e8071] mt-4 mb-5 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >GetUser Details</button>
        <button
        onClick={logout}
        className="bg-[#000000] mt-4 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded"
        >Logout</button>

       


            </div>
    )
}