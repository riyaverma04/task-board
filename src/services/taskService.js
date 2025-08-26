import { httpAxios } from "@/helper/httpHelper";

export async function addTask (task){
 const result = await httpAxios.post('/api/todo',task).then((respones)=>respones.data);
 return result;
 
}
export async function getTask(userid){
    const result = await httpAxios.get(`/api/users/${userid}/todo`).then((response)=>response.data);
    return result;
}
export async function deleteTask(workid){
    const result = await httpAxios.delete(`/api/todo/${workid}`).then((response)=>response.data);
    return result;
}