"use client"
import { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { toast } from "react-toastify";
import { loggedInUser } from "@/services/userService";
const UserProvider = ({children})=>{
     
    const [user, setUser] = useState(undefined);

    useEffect(()=>{
        async function loggedUser(){
            try {
               const currentLoggedInUsesr =  await loggedInUser();
               console.log(currentLoggedInUsesr)
               setUser({...currentLoggedInUsesr});


                
            } catch (error) {
                console.log(error)
                // toast.error("something error");
                setUser(undefined)
                
            }
        }
        loggedUser()

    },[])
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}


export default UserProvider