'use client'

import { useRouter } from "next/navigation"
import { resolve } from "styled-jsx/css";



async function takeTime (){
  await new Promise((resolve)=>{
    setTimeout(resolve,3000);
  })
 
}
const About=async()=>{
 

    const router = useRouter();
    const navigate =(url)=>{
        router.push( "/about" + url )

    }
    await takeTime();
  return(
    <>
        <h1>Welcome to our about page</h1>
        <h1>About student</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto soluta dolorum ad deserunt est ipsum illum labore impedit nesciunt facilis explicabo earum, vitae minus debitis libero reprehenderit quasi, quibusdam non voluptates asperiores odit maxime dolore. Ullam molestias similique minima molestiae? Earum iure voluptatem qui quaerat eaque architecto adipisci incidunt saepe veniam doloribus, provident cum vitae excepturi vero quidem beatae, magni eligendi est pariatur mollitia, exercitationem possimus blanditiis et. Cupiditate praesentium excepturi rem numquam odio suscipit quidem quia reprehenderit quos nesciunt iusto ipsam alias aut accusantium delectus, aspernatur quae perferendis corrupti tenetur. Minus saepe modi repudiandae beatae pariatur, ratione libero mollitia nobis quo fugit voluptatum officia tenetur atque quam, ex voluptate! Officia maiores eum perspiciatis, ab provident ullam culpa ad et.</p>

        {/* <Link href='/about/aboutstudent'>read more about students</Link> */}
        <br />
        <br />
        <br />
        <button onClick={()=>{
            navigate('/aboutstudent')
        }} style={{backgrouColor: "red", color:"green"}}> read more about student</button>

        <br />
        <br />
        <button onClick={()=>{navigate("/aboutcollege")}} style={{backgrouColor: "red", color:"green"}}>Read more about college</button>

    </>
  )  
}

export default About