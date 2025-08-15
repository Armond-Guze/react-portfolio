import React from "react"; // kept for consistency if older tooling expects it
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen section-gradient relative overflow-hidden">
      <div className="absolute inset-0 opacity-30 animate-pulse" style={{background:"radial-gradient(circle at 20% 35%, rgba(236,72,153,0.25), transparent 60%), radial-gradient(circle at 80% 70%, rgba(99,102,241,0.25), transparent 60%)"}}></div>
      {/* Container */}
      <div className="relative max-w-[1100px] mx-auto px-6 md:px-10 flex flex-col justify-center h-full">
        <p className="text-pink-500 font-medium tracking-wide mb-2">Hi, my name is</p>
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-fuchsia-400 to-indigo-400 drop-shadow-lg">Armond Guze</h1>
        <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-bold text-slate-300">
          I build modern full-stack web experiences
        </h2>
        <p className="mt-5 text-slate-400 max-w-[720px] leading-relaxed">
          I’m a full-stack developer focused on crafting performant, accessible & delightful digital products. I love translating ideas into scalable, maintainable code.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="group btn-gradient mt-8">
              <span className="flex items-center gap-3 tracking-wide">
                View My Work
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
