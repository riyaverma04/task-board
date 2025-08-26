import React, { useContext } from 'react'
import UserContext from '@/context/UserContext'
import { RiDeleteBin5Line } from 'react-icons/ri';


const TaskMapping = ({task,deleteTasksParent}) => {
    const {user} = useContext(UserContext);
    const deleteTask= async(id)=>{
        deleteTasksParent(id)
    }
    
  return (
   <>
   <div className={`${ task.status === "completed" ? "bg-green-800" : "bg-gray-800"}  w-[60vw]  mx-auto my-2 rounded-lg`}>
   <div className='  p-2 px-3'>
   <div className="flex justify-between">
   
   <h1 className='text-lg font-bold capitalize'>{task.title} </h1>
   <button onClick={deleteTask}><RiDeleteBin5Line className='text-xl'/></button>
   </div>
   <p className='capitalize text-s'>{task.content}</p>
   
   <p className='text-xs font-bold'>{task.date}</p>
   <div className='flex justify-between'>
   <p > <span className='font-bold'>Status: </span>{task.status}</p>
   <p className='font-bold text-right '>Author : <span > {user?.name}</span></p>
   </div>
  
   

   </div>
   
   </div>
    
   
   </>
  )
}

export default TaskMapping