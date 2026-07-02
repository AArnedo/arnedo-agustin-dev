import React from 'react'
import { HiOutlineDownload } from 'react-icons/hi';
import { IoIosMenu } from "react-icons/io";

const TopHeader = ({ activeSection, onMenuClick }) => {
  return (
    <header className= 'w-full px-6 lg:px-12 flex flex-wrap flex-row sm:items-center justify-between gap-4 border-b border-[#4040404d] py-6'>
      <div className='block lg:hidden cursor-pointer' onClick={onMenuClick}>
        <IoIosMenu size={30}/>
      </div>
       <div className="flex items-center gap-2 font-mono text-xs lg:text-lg ">
        <span className="text-[#404040] font-medium">agustin-arnedo.dev /</span>
        <span className="text-[#00ADE6] font-semibold py-0.5">{activeSection}</span>
      </div>
      <div className="hidden md:flex items-center gap-4 self-end sm:self-auto">
        <div className="flex items-center gap-2 bg-[#0596004f] border-none px-6 py-2 rounded-xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#012900] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#047500] "></span>
          </span>
          <span className="text-sm font-semibold text-[#047500] whitespace-nowrap">
            Disponible
          </span>
        </div>
        <a 
          href="/tu-cv.pdf" // Reemplaza por la ruta real de tu PDF en la carpeta public
          download="CV_Agustin_Arnedo.pdf"
          className="flex items-center gap-2 text-md font-e text-[#404040] bg-[#40404057] hover:bg-[#404040] hover:text-[#ECECEC] px-6 py-2 rounded-xl text-sm transition-all duration-300 shadow-sm hover:shadow active:scale-95"
        >
          <span>Descargar CV</span>
          <HiOutlineDownload size={16} />
        </a>

      </div>
    </header>
  )
}

export default TopHeader