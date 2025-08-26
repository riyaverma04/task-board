"use client";
import UserContext from '@/context/UserContext';
import { logOutUser } from '@/services/userService';
import Link from 'next/link';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const CustomHeader = () => {
  const context = useContext(UserContext);
  const router = useRouter();

  const doLogOut= async()=>{
    try {
      const result =  await logOutUser()
      console.log(result);
      context.setUser(undefined)
      toast.success("Logging out...");
      router.push('/login')
      
      
    } catch (error) {
      console.log(error)
      toast.error("fail in logout!")
      
    }

  }

  return (
  <nav className="bg-blue-600 py-2 px-2 h-12 grid grid-cols-3 items-center text-white uppercase ">
  <div className='pl-8'>work manager </div>
  <div >
  {context.user  && (
    <>
    <ul className='flex space-x-8 uppercase justify-center items-center'>
    <li><Link className=' hover:text-blue-200' href={"/"}> HOME</Link></li>
    <li><Link className=' hover:text-blue-200' href={'/add-task'}>add task</Link></li>
    <li><Link className=' hover:text-blue-200' href={'/show-task'}>show task</Link></li>
   </ul>
    </>
  )}
   
  </div>


  <div className='justify-end flex pr-8'>

  {
    context.user ? <>
    <ul className='flex space-x-4'>
      <li><Link href={"/profile/user"} className='capitalize'>{context.user.name} </Link></li>
      <li><button onClick={doLogOut}>Logout</button></li>
    </ul>
    </> : <>
    <ul className='flex space-x-4'>
      <li><Link href={"/login"}>login </Link></li>
      <li><Link href={"/signup"}>singup</Link></li>
    </ul>
    </>
  }
    
  </div>
  </nav>
  )
}

export default CustomHeader