import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createStaticNavigation,
  useNavigation,
} from '@react-navigation/native';
//import Home from 'src/pages/Home.tsx'
//import Login from 'src/pages/Login.tsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <p>Uncommon Hacks 2025
        Anvils
        Made by: Prem, Catarina, Andrea, Sasha, Surya</p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button>
          Home
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
