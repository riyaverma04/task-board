import { httpAxios } from "@/helper/httpHelper";

export async function addUser(user){
    const result =await httpAxios.post("/api/users",user).then((response)=>response.data);
    return result;

}
export async function loginHttp(loginData){
    const result =await httpAxios.post("/api/login",loginData).then((response)=>response.data);
    return result;

}

export async function loggedInUser(){
    return await httpAxios.get("/api/current").then((response)=>response.data);
}



export async function logOutUser(){
    return await httpAxios.post("/api/logout").then((response)=>response.data);
}
