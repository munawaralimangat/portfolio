import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import RootLayout from './components/RootLayout/RootLayout'
import HomePage from './components/Home/Home'
import Skills from './components/Skills/Skills'

import './App.css'
import NotFound from './components/NotFound/NotFound'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/ContactMe'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*' element={<NotFound/>}/>

      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
