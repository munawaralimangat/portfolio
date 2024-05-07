import { useState } from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import RootLayout from './components/RootLayout/RootLayout'
import HomePage from './components/Home/Home'
import About from './components/About/About'

import './App.css'
import NotFound from './components/NotFound/NotFound'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='/about' element={<About/>}/>
        
        <Route path='*' element={<NotFound/>}/>

      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
