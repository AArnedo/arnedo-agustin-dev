import React from 'react'
import { NavLink } from 'react-router-dom'
 
const NavItem = ({ icon: Icon, label, to, end, onNavigate }) => {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      title={label}
      className={({ isActive }) =>
        `group relative flex items-center justify-center w-12 h-12 rounded-lg transition-all duration-300 ${
          isActive ? 'bg-[#00ADE6] text-white shadow-lg' : 'text-white hover:bg-[#00ADE6]'
        }`
      }
    >
      <Icon size={24}/>
      <span className='absolute left-22 scale-0 group-hover:scale-100 transition-all bg-[#00ADE6] text-white text-md py-2 px-4 rounded-xs'>
          {label}
      </span>
    </NavLink>
  )
}
 
export default NavItem
 