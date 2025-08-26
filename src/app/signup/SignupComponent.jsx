"use client"
import React, { useState } from "react";
import signup from '@/assets/signup.svg'
import Image from "next/image";
import { addUser } from "@/services/userService";
import { toast } from "react-toastify";


const SignupComponent = () => {


    const [user, setUser]= useState({
        name: "",
        email: "",
        password: ""
    });


    const handleUser =(event)=>{
        const {name, value} = event.target;

        setUser((preVal)=>{
            return{
                ...preVal,
               [name] : value
            }

        })


    }

    const handleAddUser= async(event)=>{
        event.preventDefault();

        if(user.name.trim() == "" || user.name == null){
            toast.warning("Name is required",{
                position: "top-center"
            })
            return;
        }


        try {
           const result = await addUser(user);
           console.log(result)
           toast.success("signing up..", {
            position: "top-center",
           }) 
           
        } catch (error) {

            console.log(error)
            
            toast.error(error.response.data.message,{
                position: "top-center",
            })

            
        }

       
        setUser({
            name:"",
            email:"",
            password: ""
        })

      



    }
    const onResetSignUp=()=>{
        setUser({
            name:"",
            email:"",
            password: ""
        })
    }
    

  return (
    <>
      <div className="grid grid-cols-12 ">
        <div className="col-start-5 col-span-4 capitalize my-7">
        <div className="text-center flex justify-center m-4">
        <Image src={signup} alt="signup image" style={{width:"40%"}}/>
        </div>
          <h1 className="text-center text-2xl font-semi-bold">SIGN UP</h1>
          <form action="" onSubmit={handleAddUser} onReset={onResetSignUp}>
            <div>
              <label htmlFor="user_name" className="block mt-4 pl-3">name</label>
              <input type="text" id="user_name" name="name" onChange={handleUser} value={user.name} className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
             
            </div>
            
            <div>
              <label htmlFor="user_email" className="block  mt-4 pl-3">email</label>
              <input type="email" id="user_email" name="email" value={user.email} onChange={handleUser} className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500   w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
             
            </div>
            <div>
              <label htmlFor="user_password"  className=" block pl-3 mt-1">password</label>
              <input type="password" id="user_password" name="password" value={user.password} onChange={handleUser} className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>
             
            </div>
            <div className="flex justify-center my-3 mt-6">
                <button  type="submit" className=' bg-blue-600 rounded-lg  py-3 px-5 hover:bg-blue-800 '>Sign Up</button>
                <button type="reset" className=' bg-red-600 rounded-lg  py-3 mx-3 px-5 hover:bg-red-800 '>Clear</button>
                </div>
          </form>

          
        </div>
      </div>
    </>
  );
};

export default SignupComponent;
