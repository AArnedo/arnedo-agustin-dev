import {
  HiOutlineTemplate,
  HiOutlineChartBar,
  HiOutlineLockClosed,
  HiOutlineShoppingCart,
} from 'react-icons/hi'

import imgTiendaBook from  '../../assets/projects/tiendabook_project.png'
import imgBaristaBook from '../../assets/projects/RecetasCafecito.png'
import bookTracker from '../../assets/projects/BookTracker.png'
 
export const projects = [
   {
    id: 'book-tracker',
    title: 'BookTracker Dashboard',
    description: 'BookTracker es un dashboard full stack para organizar tu biblioteca personal: buscá libros vía la API de Open Library, trackeá tu progreso de lectura y visualizá tus estadísticas. Construido con React, Node.js, Express y MongoDB, con autenticación JWT y datos aislados por usuario.',
    stack: ['React','Node.js','Express','MongoDB', 'TailwindCSS'],
    demoUrl: 'https://dashboard-tracking-book.vercel.app/',
    repoUrl: 'https://github.com/AArnedo/reading-dashboard',
    image: bookTracker,
    Icon: HiOutlineChartBar,
    featured: false,
  },
  {
    id: 'recetas-cafecitos',
    title: 'Barista Book Recipe Lab',
    description: 'Aplicación web para registrar y organizar recetas de cafecitos. Permite crear fichas técnicas con nombre, método de preparación (V60, Chemex, AeroPress, Prensa Francesa, Moka, Espresso), gramaje, temperatura, tiempo y notas de cata. Incluye filtrado por método y búsqueda en tiempo real.',
    stack: ['React', 'TailwindCSS'],
    demoUrl: 'https://recetas-cafecitos.vercel.app/',
    repoUrl: '',
    image: imgBaristaBook,
    Icon: HiOutlineChartBar,
    featured: false,
  },
 {
    id: 'tienda-book',
    title: 'TiendaBook',
    description:
      'Plataforma web donde los usuarios pueden comprar, vender o donar libros de manera sencilla y rápida. La idea principal es promover el intercambio de conocimiento y dar una segunda vida a los librosPlataforma web donde los usuarios pueden comprar, vender o donar libros de manera sencilla y rápida. La idea principal es promover el intercambio de conocimiento y dar una segunda vida a los libros',
    stack: ['React', 'Node.js', 'MongoDB', 'TailwindCSS'],
    demoUrl: 'https://tienda-book.vercel.app/',
    repoUrl: 'https://github.com/tu-usuario/turnos',
    image: imgTiendaBook,
    Icon: HiOutlineTemplate,
    featured: true,
  },

]