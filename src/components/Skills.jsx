import React from 'react'
import Html from '../assets/html.png'
import Tailwind from '../assets/tailwind.png'
import ReactImg from '../assets/react.png'
import Javascript from '../assets/javascript.png'
import Node from '../assets/node.png'
import Github from '../assets/github.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#0a192f] pb-8 w-full h-screen text-gray-300'>
        {/* Container */}
      <div className='max-w-[1000px] p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-4xl text-gray-300 inline border-b-4 border-pink-600'>Skills</p>
            <p className='py-4'>These are the technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-col-2 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Html} alt="html icon" />
                <p className='my-4'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt="tailwind icon" />
                <p className='my-4'>TAILWIND</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="react icon" />
                <p className='my-4'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Javascript} alt="javascript icon" />
                <p className='my-4'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="node icon" />
                <p className='my-4'>NODE</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Github} alt="github icon" />
                <p className='my-4'>GITHUB</p>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Skills
