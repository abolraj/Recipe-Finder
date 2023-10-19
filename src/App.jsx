import './App.css'
import { useEffect, useState } from 'react'
import { MemoryRouter, Routes, Route, Link, BrowserRouter } from 'react-router-dom'
import List from './List'
import Single from './Single'
import _404 from './_404'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<List/>}/>
        <Route path="/show/:recipeId" element={<Single/>}/>
        <Route path="*" element={<_404/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
