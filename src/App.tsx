import { useState } from 'react'
import './App.css'
// import {
//   createStaticNavigation,
//   useNavigation,
// } from '@react-navigation/native';
//import Home from 'src/pages/Home.tsx'
// import Login from 'src/pages/Login.tsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Anvils</h1>
      <p>Uncommon Hacks 2025 <br/>
        Made by: Prem, Catarina, Andrea, Sasha, Surya <br/>
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button>
          Login
        </button>
        <button>
          Continue as Guest
        </button>
      </div>
    </>
  )
}

export default App
