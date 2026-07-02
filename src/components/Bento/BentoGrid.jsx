import React from 'react'
import BentoItem from './BentoItem'
import TechCards from './TechCards'
import { HiOutlineLocationMarker } from 'react-icons/hi'
import MetricCard from './MetricCard'

const BentoGrid = () => {
  return (
    <div className='w-full lg:grid lg:grid-cols-12'>
      <BentoItem className='flex flex-col gap-2 lg:col-span-5 lg:border-r border-[#878787]'>
        <div className='flex items-center gap-4'>
          <div className='hidden md:block h-0.5 lg:h-1 w-25 rounded-2xl bg-[#1e1e1eb6]'></div>
          <span className='text-xs md:text-lg lg:text-xl'>Desarrollador de Software</span>
        </div>
        <div className='font-bold py-2 lg:py-6 tracking-tight text-[#00ADE6]'>
          <h1 className='text-5xl sm:text-6xl md:text-8xl lg:text-9xl'>Agustin</h1>
          <h1 className='text-5xl sm:text-6xl md:text-8xl lg:text-9xl'>Arnedo</h1>
        </div>
        <div className='bg-[#1E1E1E] flex flex-wrap items-center lg:text-center px-6 lg:px-8 py-2 md:py-4 rounded-xl lg:justify-center gap-4 lg:gap-6 w-fit'>
          <p className='text-[#ECECEC] text-xs md:text-xl lg:text-2xl'>Frontend</p>
          <span className='hidden lg:block w-2 h-2 relative rounded-full bg-[#ECECEC]'></span>
          <p className='text-[#ECECEC] text-xs md:text-xl lg:text-2xl'>Backend</p>
          <span className='hidden lg:block w-2 h-2 relative rounded-full bg-[#ECECEC]'></span>
          <p className='text-[#ECECEC] text-xs md:text-xl lg:text-2xl'>Testing</p>
        </div>
        <div className='pt-8 lg:text-lg text-xs text-[#404040e5]'>
          <p>Programador autodidacta en constante evolución. Dedicado a explorar nuevas tecnologías y a perfeccionar mis habilidades día tras día, con el objetivo de convertir mi pasión por el desarrollo en soluciones innovadoras y eficientes.</p>
        </div>
      </BentoItem>
      <BentoItem className='lg:col-span-7 flex flex-col gap-6 md:mx-12'>
        <TechCards/>
      <div className='flex flex-col gap-6 border border-[#878787] p-6'>
        <h3 className='text-2xl uppercase text-[#00ADE6] font-semibold'>Ubicacion</h3>
        <div className='flex items-center gap-4'>
          <HiOutlineLocationMarker size={28} className='text-[#00ADE6]' />
          <p className='text-xl'>Madrid, España</p>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-6 items-center sm:justify-between'>
      {/* Metricas */}
        <MetricCard value="+8" label="PROYECTOS"/>
        <MetricCard value="+1" label="AÑO"/>
        <MetricCard value="100%" label="GANAS DE APRENDER"/>
      </div>      
      </BentoItem>
    </div>
  )
}

export default BentoGrid