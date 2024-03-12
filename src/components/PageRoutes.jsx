import React from 'react'
import { Routes, Route, useLocation } from "react-router-dom"
import { Home } from '../pages/Home'
import { About } from '../pages/About'
import { GalleryPage } from '../pages/GalleryPage'
import {AnimatePresence} from "framer-motion"
import { ContactPage } from '../pages/ContactPage'

export const PageRoutes = () => {
    const location = useLocation()
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/gallery' element={<GalleryPage/>}/>
          <Route path='/contact' element={<ContactPage/>}/>
      </Routes>
    </AnimatePresence>
  )
}
