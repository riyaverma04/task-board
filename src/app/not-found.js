'use client'

import { useRouter } from 'next/navigation'

const NotFound = () => {
    const router = useRouter();
  return (
    <div >
    <h1>This page in not found </h1>
    <button onClick={()=>router.push('/')}>go back to home page</button>
    </div>
  )
}

export default NotFound