import React from 'react' // kept for legacy JSX transform compatibility
import Html from '../assets/html.png'
import Tailwind from '../assets/tailwind.png'
import ReactImg from '../assets/react.png'
import Javascript from '../assets/javascript.png'
import Node from '../assets/node.png'
import Github from '../assets/github.png'

const Skills = () => {
  return (
        <div name='skills' className='section-gradient w-full text-gray-300 py-24 md:py-32 relative overflow-hidden'>
            <div className='absolute inset-0 opacity-40' style={{background:"radial-gradient(circle at 70% 20%, rgba(236,72,153,0.18), transparent 60%), radial-gradient(circle at 25% 80%, rgba(59,130,246,0.18), transparent 65%)"}}></div>
            <div className='relative max-w-[1150px] mx-auto px-6 md:px-10 flex flex-col items-center'>
                <div className='w-full text-center md:text-left'>
                    <p className='text-4xl font-extrabold inline bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-pink-400 border-b-4 border-pink-600 pb-2'>Skills</p>
                    <p className='mt-4 text-slate-300'>Technologies I&apos;ve been working with recently</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-7 text-center mt-12'>
                    {[{img:Html,label:'HTML'},{img:Tailwind,label:'TAILWIND'},{img:ReactImg,label:'REACT'},{img:Javascript,label:'JAVASCRIPT'},{img:Node,label:'NODE'},{img:Github,label:'GITHUB'}].map(skill => (
                        <div key={skill.label} className='glass rounded-xl py-6 px-2 hover:scale-110 hover:-translate-y-1 duration-300 group relative overflow-hidden'>
                            <div className='absolute inset-0 opacity-0 group-hover:opacity-20 transition bg-gradient-to-br from-pink-400/40 to-indigo-400/40'></div>
                            <img className='w-16 mx-auto drop-shadow-lg' src={skill.img} alt={`${skill.label} icon`} />
                            <p className='mt-4 text-sm font-semibold tracking-wide'>{skill.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
  )
}

export default Skills
