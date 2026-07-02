import React from 'react'
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";


const TechCards = ({ className }) => {

    const tecnologías = [
    { Icon: FaHtml5, label: 'HTML'},
    { Icon: FaCss3, label: 'CSS' },
    { Icon: IoLogoJavascript, label: 'JavaScript' },
    { Icon: FaReact, label: 'React' },
    { Icon: FaNodeJs, label: 'NodeJs' },
    { Icon: SiMongodb, label: 'MongoDB' },
    { Icon: FaGithub, label: 'GitHub' },
    { Icon: RiTailwindCssFill, label: 'TailwindCSS' },
];

  return (
    <div className='flex flex-col gap-6 w-full border border-[#878787] p-6'>
        <h3 className='text-xl md:text-2xl text-center uppercase text-[#00ADE6] font-semibold pb-4'>
                Stack Principal
        </h3>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {tecnologías.map((tech, index) =>(
                <div
                key={index}
                title={tech.label}
                className='flex flex-col items-center gap-2 cursor-pointer'>
                <tech.Icon
                size={34}
                className={'text-[#404040] hover:text-[#00ADE6] duration-300'}
                />
                <span className='text-xs md:text-xl'>{tech.label}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default TechCards