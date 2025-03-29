import React from 'react';
import { useState } from 'react';
import './App.css';
// import {
//   createStaticNavigation,
//   useNavigation,
// } from '@react-navigation/native';
//import Home from 'src/pages/Home.tsx'
// import Login from 'src/pages/Login.tsx'
import { Navigate } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0);

  const [goToLogin, setGoToLogin] = React.useState(false);
  if (goToLogin) {
    return <Navigate to="src/pages/Login" />;
  };

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
        <button onClick={() => setGoToLogin(true)}>
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
