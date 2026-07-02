import React, { useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import TopHeader from '../components/Header/TopHeader'
 
const sectionLabels = {
  '/': 'inicio',
  '/proyectos': 'proyectos',
  '/contacto': 'contacto',
}
 
const MainLayout = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const activeSection = sectionLabels[pathname] ?? 'inicio'
 
  return (
    <div className='min-h-screen w-full bg-[#f4f1ea] text-slate-900 font-sans antialiased'>
      <Sidebar
        isMobileMenuOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
      <main className='lg:pl-30 flex-1 min-h-screen flex flex-col'>
        <TopHeader
          activeSection={activeSection}
          onMenuClick={() => setIsMobileMenuOpen(true)}
        />
        <div className={pathname === '/' ? 'my-auto' : ''}>
          <Outlet />
        </div>
      </main>
    </div>
  )
}
 
export default MainLayout
 