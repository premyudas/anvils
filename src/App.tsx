import { useState } from 'react'
import './App.css'
import { Unity, useUnityContext } from 'react-unity-webgl'; // Import Unity WebGL components
// import {
//   createStaticNavigation,
//   useNavigation,
// } from '@react-navigation/native';
//import Home from 'src/pages/Home.tsx'
//import Login from 'src/pages/Login.tsx'


function App() {
  const [count, setCount] = useState(0)
  const [showUnity, setShowUnity] = useState(false); // state to toggle Unity component

  // Configure Unity context with the paths to your Unity build files
  const { unityProvider } = useUnityContext({
    loaderUrl: '/unityBuild/UncommonHacks2025Test4.loader.js',
    dataUrl: '/unityBuild/UncommonHacks2025Test4.data',
    frameworkUrl: '/unityBuild/UncommonHacks2025Test4.framework.js',
    codeUrl: '/unityBuild/UncommonHacks2025Test4.wasm',
  });

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
          Home
        </button>
        <button onClick={() => setShowUnity(!showUnity)}>
          Show Unity
        </button>
        {/* Conditionally render the Unity WebGL content */}
        {showUnity && (
            <div>

            <Unity unityProvider={unityProvider} />
            </div>
        )}
      </div>
    </>
  )
}

export default App