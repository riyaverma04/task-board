'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
const AboutLayout =({children})=>{
    const pathName = usePathname();
    return(
        <div>
        {
            pathName !== "/about/aboutstudent" && pathName!== "/about" ?
         <> 
        <h1>This is common layout for about screen</h1>
        <p>this comonn layout will be visible to all screen to the all abut pages </p>
        <Link href="/about/aboutcollege">about college</Link>
        <br />

        <Link href="/about/aboutstudent">about student</Link>
        </>  
       : null}
         {
            children
        }
        </div>
        
    )
}
export default AboutLayout;