"use client"
import UserContext from '@/context/UserContext';
import { deleteTask, getTask } from '@/services/taskService';
import React, { useContext, useEffect, useState } from 'react'
import TaskMapping from './TaskMapping';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'

const ShowTaskComponent = () => {

  const [tasks, setTasks]= useState([]);
  const context = useContext(UserContext)
  

  async function loadTask (userid){


   
    try {
      const tasks = await getTask(userid);
     
      setTasks([...tasks]);
      console.log(tasks)
     
      
    } catch (error) {
      console.log(error);
      
    }

  }


  useEffect(()=>{
    if(context.user){

      loadTask(context.user._id);
    }
  },[context.user])






  async  function deleteTasksParent(id){
    
   
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(async(result) => {
        if (result.isConfirmed) {
          const result1 = await deleteTask(id);
      console.log(result1);
      const newTask = tasks.filter((result)=>result._id != id)
      setTasks(newTask)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }else if(result.isDenied){
          return;
          
        }
      })

      
      
      
      // toast.success("task deleted successfully!!!")
      
    } catch (error) {
      console.log(error);
      toast.error("error in deleting..")
      
    }
  }


  return (
    <>
     <div className="cotainer grid">
      <div className='mb-8' >
        <h1 className='text-2xl text-center my-6'>Your tasks  ({tasks.length})</h1>
        {tasks.map((task)=>(
          <TaskMapping  key={task._id} task={task} deleteTasksParent={()=>deleteTasksParent(task._id)}/>

        )
          
        )}
      </div>
     </div>
    </>
  )
}

export default ShowTaskComponent