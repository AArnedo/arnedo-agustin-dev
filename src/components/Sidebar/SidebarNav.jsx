import React from 'react'
import { IoHomeOutline, IoMailOutline, IoBagOutline } from "react-icons/io5"
import NavItem from './NavItem'
 
const SidebarNav = ({ onNavigate }) => {
 
  const navLinks = [
    { id: 'inicio', label: 'Inicio', icon: IoHomeOutline, to: '/', end: true },
    { id: 'proyectos', label: 'Proyectos', icon: IoBagOutline, to: '/proyectos' },
    { id: 'contacto', label: 'Contacto', icon: IoMailOutline, to: '/contacto' },
  ]
 
  return (
    <nav className='flex flex-col gap-4'>
      {navLinks.map((link) => (
        <NavItem
          key={link.id}
          icon={link.icon}
          label={link.label}
          to={link.to}
          end={link.end}
          onNavigate={onNavigate}
        />
      ))}
    </nav>
  )
}
 
export default SidebarNav
 