import React from 'react';

const Contact = () => {
  return (
    <div name='contact' className='w-full section-gradient py-24 md:py-32 px-6 flex justify-center items-center relative overflow-hidden'>
      <div className='absolute inset-0 opacity-40' style={{background:"radial-gradient(circle at 20% 80%, rgba(236,72,153,0.18), transparent 60%), radial-gradient(circle at 80% 20%, rgba(59,130,246,0.18), transparent 55%)"}}></div>
      <form method='POST' action="https://getform.io/f/pbgxvxwa" className='relative glass flex flex-col max-w-[640px] w-full p-8 md:p-10 rounded-2xl space-y-5 shadow-2xl'>
        <div>
          <p className='text-4xl font-extrabold inline bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 border-b-4 border-pink-600 pb-2'>Contact</p>
          <p className='text-slate-300 pt-4 text-sm md:text-base'>Submit the form below or email me at <a className='text-pink-400 underline decoration-pink-500/50 hover:decoration-pink-400' href='mailto:Armond.Guze@yahoo.com'>Armond.Guze@yahoo.com</a></p>
        </div>
        <input aria-label='Name' className='input-field' type="text" placeholder='Name' name='name' required />
        <input aria-label='Email' className='input-field' type="email" placeholder='Email' name='email' required />
        <textarea aria-label='Message' className='input-field' name="message" rows="7" placeholder='Message' required></textarea>
        {/* Honeypot anti-spam */}
        <input type="text" name="_gotcha" style={{display:'none'}} aria-hidden="true" tabIndex={-1} />
        <button type='submit' className='btn-gradient mt-2 self-center w-full md:w-auto'><span>Let&apos;s Collaborate</span></button>
      </form>
    </div>
  );
};

export default Contact;
