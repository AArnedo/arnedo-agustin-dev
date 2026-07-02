import React from 'react'

const MetricCard = ({ value, label }) => {
  return (
    <div className='w-full sm:w-fit flex flex-col gap-1 sm:gap-2 items-center justify-center min-w-0 sm:min-w-50 py-3 sm:py-4 bg-[#1e1e1e] rounded-xl'>
        <span className='font-bold text-2xl sm:text-5xl text-[#ECECEC]'>{value}</span>
        <span className='text-[#ECECEC] text-[10px] sm:text-lg text-center px-1'>{label}</span>
    </div>
  )
}

export default MetricCard