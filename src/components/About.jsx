import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full min-h-screen section-alt-gradient text-gray-300 py-24 md:py-32 relative'>
      <div className='absolute inset-0 pointer-events-none opacity-60 mix-blend-overlay' style={{background:"radial-gradient(circle at 20% 20%, rgba(99,102,241,0.15), transparent 60%), radial-gradient(circle at 80% 70%, rgba(236,72,153,0.18), transparent 65%)"}}></div>
      <div className='relative flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1100px] w-full grid md:grid-cols-3 gap-10 px-6 md:px-10'>
          <div className='md:col-span-1'>
            <p className='text-4xl font-extrabold inline bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 border-b-4 border-pink-600 pb-2'>About</p>
          </div>
          <div className='md:col-span-2 space-y-8'>
            <div className='text-3xl sm:text-4xl font-bold leading-tight'>
              <p className='drop-shadow-lg'>Hi. I&apos;m Armond — <span className='text-pink-400'>nice to meet you</span>.</p>
            </div>
            <div className='text-slate-300 leading-relaxed text-lg tracking-wide'>
              <p>I love designing and building software that empowers people. My approach blends thoughtful UX, clean architecture, and performance-minded engineering. I enjoy collaborating with teams and stakeholders to translate complex challenges into intuitive solutions.</p>
              <p className='mt-4'>When I’m not coding, I’m exploring emerging tools, refining side projects, or leveling up my understanding of scalable systems & modern front-end patterns.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
