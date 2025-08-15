import { useState, useEffect } from "react";
import Logo from "../assets/ag logo.png";
import { TfiMenuAlt } from "react-icons/tfi";
import { MdCancel } from "react-icons/md";
import { FaLinkedin, FaGithubSquare, FaBook } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const handleclick = () => setNav(!nav);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      // Determine active section heuristically
      const sections = ["home","about","skills","work","contact"]; 
      for (let id of sections) {
        const el = document.querySelector(`div[name='${id}']`);
        if (el) {
          const rect = el.getBoundingClientRect();
            if (rect.top <= window.innerHeight * 0.35 && rect.bottom >= window.innerHeight * 0.35) {
              setActive(id);
              break;
            }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className={`fixed w-full h-[70px] flex justify-between items-center font-semibold px-4 md:px-8 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0a192fcc] backdrop-blur-md shadow-lg' : 'bg-transparent'} text-gray-200`}>      
      <div className="flex items-center">
        <img src={Logo} alt="logo" className="w-48 sm:w-56 lg:w-64 -ml-4 select-none pointer-events-none drop-shadow-lg" />
      </div>

      {/* menu */}

      <ul className="hidden md:flex space-x-2 lg:space-x-4">
        {['home','about','skills','work','contact'].map(item => (
          <li key={item}>
            <Link to={item} smooth={true} duration={500} onClick={() => setActive(item)} className={`nav-link capitalize ${active===item? 'nav-link-active':''}`}>{item}</Link>
          </li>
        ))}
      </ul>

      {/* Hamburger */}
      <div onClick={handleclick} className="md:hidden z-50 cursor-pointer text-2xl">
        {!nav ? <TfiMenuAlt /> : <MdCancel />}
      </div>

      {/* mobile menu */}
      <ul className={`${nav? 'opacity-100 pointer-events-auto':'opacity-0 pointer-events-none'} md:hidden fixed inset-0 flex flex-col items-center justify-center gap-6 bg-[#0a192fe6] backdrop-blur-xl transition-opacity duration-300`}>        
        {['home','about','skills','work','contact'].map(item => (
          <li key={item} className="py-2">
            <Link onClick={() => {handleclick(); setActive(item);}} to={item} smooth={true} duration={400} className={`text-3xl font-semibold tracking-wide nav-link ${active===item? 'nav-link-active':''}`}>{item.charAt(0).toUpperCase()+item.slice(1)}</Link>
          </li>
        ))}
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[40%] left-0 space-y-2">
        <ul>
          <li className="group ml-[-108px] hover:ml-0 duration-300">
            <a className="w-[190px] h-[56px] glass flex justify-between items-center pl-6 pr-4 rounded-r-xl text-sm tracking-wide" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile">
              <span className="font-semibold">LinkedIn</span> <FaLinkedin size={26} className="text-blue-400 group-hover:scale-110 transition" />
            </a>
          </li>
          <li className="group ml-[-108px] hover:ml-0 duration-300">
            <a className="w-[190px] h-[56px] glass flex justify-between items-center pl-6 pr-4 rounded-r-xl text-sm tracking-wide" href="https://github.com/Armond-Guze">
              <span className="font-semibold">Github</span> <FaGithubSquare size={26} className="group-hover:scale-110 transition" />
            </a>
          </li>
          <li className="group ml-[-108px] hover:ml-0 duration-300">
            <a className="w-[190px] h-[56px] glass flex justify-between items-center pl-6 pr-4 rounded-r-xl text-sm tracking-wide" href="mailto:Armond.Guze@yahoo.com">
              <span className="font-semibold">Email</span> <MdEmail size={26} className="text-pink-400 group-hover:scale-110 transition" />
            </a>
          </li>
          <li className="group ml-[-108px] hover:ml-0 duration-300">
            <a className="w-[190px] h-[56px] glass flex justify-between items-center pl-6 pr-4 rounded-r-xl text-sm tracking-wide" href="https://docs.google.com/document/d/1tgYVRB7swfTPKuoLqYufvSWtrJVgrI3X/edit">
              <span className="font-semibold">Resume</span> <FaBook size={24} className="text-indigo-300 group-hover:scale-110 transition" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
