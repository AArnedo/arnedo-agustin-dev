import React from 'react'

const BentoItem = ({children, className=''}) => {
  return (
    <div className={`p-6 md:p-14 ${className}`}>
      {children}
    </div>
  )
}

export default BentoItem