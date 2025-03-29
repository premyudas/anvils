import { useState } from 'react'
import './App.css'
import { Unity, useUnityContext } from 'react-unity-webgl'; // Import Unity WebGL components
import AuthButtons from './components/login.tsx'

function App() {
  const [home, setHome] = useState(true)
  // const [loggedIn, setLogin] = useState(false);
  const [showLoginPage, setShowLoginPage] = useState(false);
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
      <main>
        {!home &&
          <button onClick={() => {
            setHome(!home)
            setShowUnity(false)
            setShowLoginPage(false)
          }}>
            Home
          </button>
        }

        {home &&
          <div>
            <div>
              <h1>Anvils</h1>
              <p>
                Uncommon Hacks 2025 <br/>
                Made by: Prem, Catarina, Andrea, Sasha, Surya <br/>
              </p>
            </div>
            
            <div className="card">
              <button onClick={() => {
                setHome(false)
                setShowLoginPage(true)
              }}>
                Log in / Sign up
              </button>

              <button onClick={() => {
                setHome(false)
                setShowUnity(true)
              }}>
                Continue as Guest
              </button>
            </div>
          </div>
        }

        {showLoginPage && (
          <div>
            <AuthButtons/>
          </div>
        )}

        {showUnity && (
          <div>
            <Unity unityProvider={unityProvider} />
          </div>
        )}

      </main>
    </>
  )
}

export default App