"use client"
import { addTask } from '@/services/taskService';
import React, { useState } from 'react'
import { toast } from 'react-toastify';



const AddTask = () => {
    const [addBtnVal, setAddBtnVal]= useState("Add Task")
   
    const [task, setTask]= useState({
        title:"",
        content: "",
        status: "none",
        date: "",
        author: "",
        userid:""

    });

    const handleAddTask=async (event)=>{
        event.preventDefault();
        setAddBtnVal( "Adding...")

        try {
            const result = await addTask(task);
            toast.success("Your task is added!!",{
                position: "top-center",
            });

            setTask({
            title:" ",
            content: "",
            status: "none",
            date: "",
            author: "",
           
    
            })
        } catch (error) {
            console.log(error)
            toast.error("Fail to add task!!",{
                position:"top-center"
            })
            
        }
        setAddBtnVal("Add-Task")

        

    }
  return (
    <>
        <div className='mt-5 mb-4 capitalize grid grid-cols-12 '>
            <div className='col-start-4 col-span-6'><h1 className=' text-center text-2xl'>Add your task here!!</h1>


            <form action="#" onSubmit={handleAddTask}>



                <label htmlFor="task_title" className='my-0 block'>title</label>
                <input type="text" id="task_title" name="task_title" onChange={(event)=>{
                    setTask((prev)=>{
                        return{...prev,
                        title: event.target.value}
                        
                    })
                }} value={task.title} className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>


                {/* adding discription about the task */}
                <label htmlFor="task_discription" className='my-0 block'>Description</label>
                <textarea type="text" id="task_discription" name='task_discription' onChange={(event)=>{
                    setTask((prev)=>{
                        return{...prev,
                        content: event.target.value,}
                        
                    })
                }} value={task.content} className="bg-gray-50 border border-gray-300 mb-3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required rows={5}/>
                {/* adding author
                <label htmlFor="task_author" className='my-0 block'>Author</label>
                <input type="text" id="task_author" name='task_author' onChange={(event)=>{
                    setTask((prev)=>{
                        return{...prev,
                        author: event.target.value,}
                        
                    })
                }} value={task.author} className="bg-gray-50 border border-gray-300 mb-3 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required rows={5}/> */}




              



                {/* for date of the task */}
                
                <label htmlFor="task_date" className='my-0 block'>Date</label>
                <input type="date" id="task_date" name='task_date' onChange={(event)=>{
                    setTask((prev)=>{
                        return{...prev,
                        date: event.target.value,}
                        
                    })
                }} value={task.date} className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required/>


                {/* task status */}
                <label htmlFor="task_status" className='my-0 block'>Status</label>
                <select type="text" id="task_status" name='task_status' onChange={(event)=>{
                    setTask((prev)=>{
                        return{...prev,
                        status: event.target.value,}
                        
                    })
                }} value={task.status} className="bg-gray-50 border mb-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  required>
                    <option value="none"  disabled>----Select One---- </option>
                    <option value="pending">Pending</option>
                    <option value="completed">Completed</option>
                    <option value="started just now">Started Now</option>
                </select>

                <div className="flex justify-center my-3 mt-6">
                <button className=' bg-blue-600 rounded-lg  py-3 px-5 hover:bg-blue-800 '>{addBtnVal}</button>
                <button className=' bg-red-600 rounded-lg  py-3 mx-3 px-5 hover:bg-red-800 '>Clear</button>
                </div>
               

            </form>
            
            
            
            </div>
        </div>
    </>
  )
}

export default AddTask