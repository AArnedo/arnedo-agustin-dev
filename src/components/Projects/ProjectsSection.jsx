import React from 'react'
import FeaturedProjectCard from './FeaturedProjectCard'
import ProjectCard from './ProjectCard'
import { projects } from './projects'
 
const ProjectsSection = () => {
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
 
  return (
    <section className='w-full px-6 lg:px-12 py-10 lg:py-14'>
      <div className='flex items-center gap-4 mb-2'>
        <div className='hidden md:block h-0.5 lg:h-1 w-24 rounded-2xl bg-[#1e1e1eb6]'></div>
        <span className='text-xs md:text-lg'>Trabajos seleccionados</span>
      </div>
 
      <div className='flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8 lg:mb-12'>
        <h1 className='font-bold tracking-tight text-[#00ADE6] text-5xl sm:text-6xl lg:text-7xl'>
          Mis Proyectos
        </h1>
        <div className='flex items-center gap-2 bg-[#1E1E1E] text-[#ECECEC] rounded-xl px-6 py-3 w-fit'>
          <span className='font-bold text-xl'>{String(projects.length).padStart(2, '0')}</span>
          <span className='text-sm'>proyectos</span>
        </div>
      </div>
 
      {featured && (
        <div className='mb-6'>
          <FeaturedProjectCard project={featured} index={1} />
        </div>
      )}
 
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {rest.map((project, i) => (
          <ProjectCard key={project.id} project={project} index={i + 2} />
        ))}
      </div>
    </section>
  )
}
 
export default ProjectsSection