import React from 'react'

const Footer = () => {
  return (
    <footer className=' bg-blue-600 h-40 text-white grid grid-flow-col '>
    <div className='w-[40vw] flex flex-col justify-center items-center px-12'>
      <h1 className='text-3xl font-bold'>welcome to work mannager</h1>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
    </div>
    <div className='w-[40vw] flex flex-col justify-center items-center '>
      <h5>important links</h5>
      <ul>
        <li>instagram</li>
        <li>facebook</li>
        <li>linkedin</li>
        <li>github</li>
      </ul>
    </div>

    </footer>
  )
}

export default Footer