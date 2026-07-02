import React from 'react'
import { HiOutlineArrowRight } from 'react-icons/hi'
 
const ProjectCard = ({ project, index }) => {
  const { title, description, stack, demoUrl, image, Icon } = project
 
  return (
    <div className='border border-[#878787] flex flex-col'>
 
      {/* Imagen o ícono fallback */}
      <div className='relative bg-[#1E1E1E] h-44 overflow-hidden'>
        <span className='absolute top-3 left-4 text-[#00ADE6] text-xs font-bold z-10'>
          {String(index).padStart(2, '0')}
        </span>
 
        {image ? (
          <>
            <img
              src={image}
              alt={`Captura de ${title}`}
              className='w-full h-full object-cover object-top'
            />
            <div className='absolute inset-0 bg-linear-to-t from-[#1e1e1e]/50 via-transparent to-[#1e1e1e]/10 pointer-events-none' />
          </>
        ) : (
          <div className='w-full h-full flex items-center justify-center'>
            {Icon && <Icon size={30} className='text-[#00ADE6]' />}
          </div>
        )}
      </div>
 
      {/* Info */}
      <div className='flex flex-col gap-3 p-6 flex-1'>
        <h3 className='text-lg font-bold tracking-tight'>{title}</h3>
        <p className='text-xs text-[#404040e5] leading-relaxed'>{description}</p>
 
        <div className='flex flex-wrap gap-1.5'>
          {stack.map((tech) => (
            <span
              key={tech}
              className='bg-[#1E1E1E] text-[#ECECEC] text-[10px] rounded-full px-2.5 py-1'
            >
              {tech}
            </span>
          ))}
        </div>
 
        {demoUrl && (
          <a
            href={demoUrl}
            target='_blank'
            rel='noreferrer'
            className='flex items-center gap-2 bg-[#40404057] hover:bg-[#404040] hover:text-[#ECECEC] text-xs px-4 py-2 rounded-lg transition-all duration-300 active:scale-95 w-fit mt-auto'
          >
            <span>Ver más</span>
            <HiOutlineArrowRight size={14} />
          </a>
        )}
      </div>
    </div>
  )
}
 
export default ProjectCard