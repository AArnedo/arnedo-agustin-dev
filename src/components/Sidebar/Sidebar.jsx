import React from 'react'
import SidebarLogo from './SideBarLogo'
import SidebarNav from './SidebarNav'
 
const Sidebar = ({ isMobileMenuOpen, onClose }) => {
 
  return (
    <>
      {/* Fondo oscuro al abrir el menú en móvil, cierra al tocar fuera */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
 
      <aside
        className={`fixed left-0 top-0 py-2 h-screen w-30 flex flex-col items-center bg-[#404040] z-50
        transition-transform duration-300 ease-in-out
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`}
      >
        <Sidebarlogo />
        <div className="grow flex items-center">
          <SidebarNav onNavigate={onClose} />
        </div>
      </aside>
    </>
  )
}
 
export default Sidebar
 