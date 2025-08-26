"use client"
import React, { useContext, useState } from 'react'
import loginBanner from '../../assets/loginBanner.svg';
import Image from 'next/image';
import { toast } from 'react-toastify';
import { loginHttp } from '@/services/userService';
import { useRouter } from 'next/navigation';
import UserContext from '@/context/UserContext';





const LoginComponent = () => {
 const router = useRouter();
 const context = useContext(UserContext)

 
  const [loginData, setLoginData]= useState({
    email: "",
    password: ""
  })
  

  const handleLogin=(event)=>{
    const {name, value }= event.target;
    setLoginData((preVal)=>{
      return{
        ...preVal,
        [name]: value,
      }
    })



    
  }
  async function onLogninSubmit (event){
    event.preventDefault();
    if(loginData.email.trim() === "" || loginData.password.trim()=== ""){
      toast.info("kindly fill  details!!",{
        position: "top-center"
      })
      return;
    }
    try {
     const result = await loginHttp(loginData)
      console.log(result);
      toast.success("login in...")
      context.setUser(result.user)

      router.push("/profile/user")
      
    } catch (error) {
      console.log(error)
      toast.error(error.response.data.message);
      
    }



   

    

    setLoginData({
      email: "",
      password: ""
    })


    //redirecting page user profile
    





   
      
    

  }
  return (
    <>
      <div className='grid grid-cols-12 '>
        <div className='col-span-5 col-start-4'>
        <div className="text-center flex justify-center m-4">
        <Image src={loginBanner} alt="signup image" style={{width:"50%"}}/>
        </div>
          <h1 className="text-center text-2xl font-semi-bold">Login</h1>
          <form action="*" onSubmit={onLogninSubmit}>
            <div>
              <label htmlFor="user_email" className='block mt-3'>Email</label>
              <input type="email" id="user_email" name="email" onChange={handleLogin} value={loginData.email} className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
             
            </div>
            <div>
              <label htmlFor="user_password" className='block mt-3'>password</label>
              <input type="password" id="user_password" onChange={handleLogin} name="password" value={loginData.password} className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
             
            </div>
            <div className="flex justify-center mb-9 my-6">
                <button  id='submit_btn' type="submit" className=' bg-blue-600 rounded-lg  py-3 px-20  ' >Log In</button>
               
                </div>
             
          </form>
        </div>
      </div>
    </>
  )
}

export default LoginComponent