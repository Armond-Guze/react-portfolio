import React from 'react'
import { FaReact, FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is </p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Armond Guze</h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>Im a Full Stack developer</h2>
        <p className='text-[#8892b0] by-4 max-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus eaque odio dicta illo voluptate esse nostrum laborum asperiores nulla optio, pariatur aliquam cum porro excepturi maxime dolore. Totam, amet possimus?</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-3 flex items-center hover:bg-pink-600 hover:border-pink-700'>View Work 
            <span className='group-hover:rotate-90 duration-300'><FaArrowRight className='ml-3 '/></span></button>
        </div>
      </div>
    </div>
  )
}

export default Home