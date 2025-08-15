import React from "react";
import WorkImg from "../assets/workImg.jpeg";
import Frontend from "../assets/frontend.png";
import SnapImg from "../assets/Untitled.png";

const projects = [
  // SNAP first
  {
    title: "Snap",
    img: SnapImg,
    demo: "https://thegamesnap.com/",
    code: "https://github.com/Armond-Guze/the-snap",
    tags: ["Realtime","Social","MERN"],
  },
  // Carhub second
  {
    title: "Carhub",
    img: WorkImg,
    demo: "https://hub4cars.netlify.app/",
    code: "https://github.com/Armond-Guze/carhub",
    tags: ["Next.js","API","UI"],
  },
  // Frontend Ecommerce third
  {
    title: "Frontend Ecommerce",
    img: Frontend,
    demo: "https://ecom-frontend-ag.netlify.app/",
    code: "https://github.com/Armond-Guze/ecommerce-frontend",
    tags: ["React","Commerce","Stripe"],
  },
];

const Work = () => {
  return (
    <div name="work" className="w-full section-alt-gradient text-gray-300 py-24 md:py-32">
      <div className="max-w-[1150px] mx-auto px-6 md:px-10 flex flex-col w-full">
        <div className="pb-6 md:pb-10">
          <p className="text-4xl font-extrabold inline bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-indigo-400 border-b-4 border-pink-600 pb-2">
            Work
          </p>
          <p className="mt-4 text-slate-300">Some things I&apos;ve built recently</p>
        </div>
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(p => (
            <div key={p.title} className="group relative rounded-xl overflow-hidden shadow-xl shadow-black/40 bg-black/30 ring-1 ring-white/10 hover:ring-pink-500/40 transition">
              <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage:`url(${p.img})`}}></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a192f] via-[#0a192fd9] to-transparent opacity-80"></div>
              <div className="relative flex flex-col h-64 p-5 justify-end">
                <h3 className="text-xl font-bold tracking-wide drop-shadow-md">{p.title}</h3>
                <div className="mt-2 flex flex-wrap gap-2 text-[11px] uppercase tracking-wider font-semibold">
                  {p.tags.map(t => <span key={t} className="px-2 py-1 rounded-md bg-white/10 backdrop-blur-sm">{t}</span>)}
                </div>
                <div className="mt-4 flex gap-3">
                  <a href={p.demo} target="_blank" rel="noreferrer" className="btn-gradient text-sm font-semibold px-4 py-2 rounded-md"><span>Demo</span></a>
                  <a href={p.code} target="_blank" rel="noreferrer" className="btn-gradient text-sm font-semibold px-4 py-2 rounded-md"><span>Code</span></a>
                </div>
              </div>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-pink-500/20 to-indigo-500/20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
