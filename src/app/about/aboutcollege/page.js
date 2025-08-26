'use client';
import { useRouter } from "next/navigation";

const CollegePage = () => {
    const router = useRouter();
  return (
    <div>
        <h1>welcome to the college page </h1>
        <p>You will read here more about the college </p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium nulla eum quo mollitia a, atque omnis. Officiis maxime dolor quidem, accusantium nisi ipsam quia repellat excepturi, sed velit ex saepe provident praesentium iste eius voluptatem? Necessitatibus fugit sunt eos sapiente nihil provident officiis sint rerum esse animi doloribus voluptatibus tempora dolor recusandae nobis error incidunt dolorem cumque, aspernatur illum magni culpa minima soluta. Natus commodi reprehenderit consequatur voluptatem ratione libero necessitatibus reiciendis debitis enim a rem modi incidunt beatae sunt alias impedit molestias, fuga hic officiis excepturi suscipit. Dolorem incidunt, libero saepe expedita officia iste autem corrupti laboriosam quidem optio mollitia voluptatibus fuga officiis. Ipsa, quas? Assumenda dolor veritatis facere vel saepe labore soluta eveniet cupiditate, minima animi in corporis?</p>
        <br /><br /><br />
        <button onClick={()=>{router.push("/about")}}>Move back to about page</button>
    </div>

    
  )
}

export default CollegePage