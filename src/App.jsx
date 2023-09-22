import { useState } from 'react'
import './App.css'
import Search from './Search'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <Search/>
    </div>
  )
}

export default App
