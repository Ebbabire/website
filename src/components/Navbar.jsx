import { useState } from 'react';
import { AiFillHome, AiOutlineMenu } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';
import { GrProjects } from 'react-icons/gr';
import { MdEmail } from 'react-icons/md';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <>
      {!menuOpened ? (
        <nav className="px-2 py-2  shadow-lg fixed top-0 right-0 left-0 bg-white z-[99]">
          <div className="flex justify-between items-center ml- md:ml-10 lg:ml-[15%]">
            <div className="order-2 md:order-1">
              <a href="#main">
                <span className="text-3xl font-semibold font-Kalam tracking-wider pr-2">
                  Ebba
                </span>
                <span className="font-extrabold text-3xl text-red-600">.</span>
              </a>
            </div>
            <div className="hidden md:flex order-1 md:order-2">
              <a href="#main" className="lg:pr-4">
                <span className="text-lg font-medium tracking-wide hover:bg-slate-200 transition duration-300 ease-in-out rounded-lg py-2 px-4">
                  Home
                </span>
              </a>
              <a href="#main" className="lg:pr-4">
                <span className="text-lg font-medium tracking-wide hover:bg-slate-200 transition duration-300 ease-in-out rounded-lg py-2 px-4">
                  About
                </span>
              </a>
              <a href="#projects" className="lg:pr-4">
                <span className="text-lg font-medium tracking-wide hover:bg-slate-200 transition duration-300 ease-in-out rounded-lg py-2 px-4">
                  Projects
                </span>
              </a>
              <a href="#contact" className="lg:pr-4">
                <span className="text-lg font-medium tracking-wide hover:bg-slate-200 transition duration-300 ease-in-out rounded-lg py-2 px-4">
                  Contact
                </span>
              </a>
            </div>
            <div
              className="md:hidden hover:cursor-pointer"
              onClick={() => setMenuOpened(!menuOpened)}
            >
              <AiOutlineMenu className="text-2xl" />
            </div>
            <div className="order-3 lg:mr-[5%] bg-blue-600 py-1 px-2  rounded-full text-white text-sm md:text-xl md:py-2 md:px-4">
              <span>Download CV</span>
            </div>
          </div>
        </nav>
      ) : (
        <div
          className="flex flex-col justify-center text-xl items-center h-screen"
          onClick={() => setMenuOpened(!menuOpened)}
        >
          <div className="flex justify-center items-center w-[75%] bg-slate-300 rounded-full py-3 mb-3 transition duration-300 ease-in-out hover:scale-110">
            <AiFillHome />
            <a href="#home">
              <span className="text-xl font-semibold tracking-wide rounded-lg p-2">
                Home
              </span>
            </a>
          </div>
          <div className="flex justify-center items-center w-[75%] bg-slate-300 rounded-full py-3 mb-3 transition duration-300 ease-in-out hover:scale-110">
            <BsFillPersonFill />
            <a href="#about">
              <span className="text-xl font-semibold tracking-wide rounded-lg p-2">
                About
              </span>
            </a>
          </div>
          <div className="flex justify-center items-center w-[75%] bg-slate-300 rounded-full py-3 mb-3 transition duration-300 ease-in-out hover:scale-110">
            <GrProjects />
            <a href="#projects">
              <span className="text-xl font-semibold tracking-wide rounded-lg p-2">
                Projects
              </span>
            </a>
          </div>
          <div className="flex justify-center items-center w-[75%] bg-slate-300 rounded-full py-3 mb-3 transition duration-300 ease-in-out hover:scale-110">
            <MdEmail />
            <a href="#contact">
              <span className="text-xl font-semibold tracking-wide rounded-lg p-2">
                Contact
              </span>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
