import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
 
const Sidebarlogo = () => {
  return (
    <Link to='/' className='w-16 h-16 block'>
        <img src={logo} alt="Logo AA" className='w-full h-full object-contain'/>
    </Link>
  )
}
 
export default Sidebarlogo
 