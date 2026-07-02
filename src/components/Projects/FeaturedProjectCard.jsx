import React from 'react'
import { HiOutlineArrowRight, HiOutlineCode } from 'react-icons/hi'
 
const FeaturedProjectCard = ({ project, index }) => {
  const { title, description, stack, demoUrl, repoUrl, image, Icon } = project
 
  return (
    <div className='border border-[#878787] grid grid-cols-1 lg:grid-cols-2'>

      <div className='relative bg-[#1E1E1E] min-h-50 lg:min-h-70 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[#878787]'>
        <span className='absolute top-5 left-6 text-white/20 text-lg font-bold'>
          {String(index).padStart(2, '0')}
        </span>
        {image ? (
          <>
            <img
              src={image}
              alt={`Captura de ${title}`}
              className='w-full h-full object-cover object-top transition-transform duration-500 hover:scale-75'
            />
            <div className='absolute inset-0 bg-linear-to-t from-[#1e1e1e]/60 via-transparent to-[#1e1e1e]/20 pointer-events-none' />
          </>
        ) : (
          <div className='w-full h-full flex items-center justify-center'>
            {Icon && <Icon size={56} className='text-[#00ADE6]' />}
          </div>
        )}
      </div>
 
      <div className='flex flex-col gap-4 p-8 lg:p-10'>
        <span className='text-xs uppercase tracking-wider text-[#00ADE6] font-semibold'>
          Proyecto destacado
        </span>
        <h2 className='text-2xl lg:text-3xl font-bold tracking-tight'>{title}</h2>
        <p className='text-sm text-[#404040e5] leading-relaxed'>{description}</p>
 
        <div className='flex flex-wrap gap-2'>
          {stack.map((tech) => (
            <span
              key={tech}
              className='bg-[#1E1E1E] text-[#ECECEC] text-xs rounded-full px-3 py-1.5'
            >
              {tech}
            </span>
          ))}
        </div>
 
        <div className='flex flex-wrap gap-3 mt-2'>
          {demoUrl && (
            <a
              href={demoUrl}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 bg-[#404040] text-[#ECECEC] hover:bg-[#00ADE6] text-sm px-5 py-2.5 rounded-xl transition-all duration-300 active:scale-95'
            >
              <span>Ver proyecto</span>
              <HiOutlineArrowRight size={16} />
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target='_blank'
              rel='noreferrer'
              className='flex items-center gap-2 bg-[#40404057] text-[#404040] hover:bg-[#404040] hover:text-[#ECECEC] text-sm px-5 py-2.5 rounded-xl transition-all duration-300 active:scale-95'
            >
              <span>Código</span>
              <HiOutlineCode size={16} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
 
export default FeaturedProjectCard