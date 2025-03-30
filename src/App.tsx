import { useState, useEffect } from 'react'
import './App.css'
import { Unity, useUnityContext } from 'react-unity-webgl'; // Import Unity WebGL components
import AuthButtons from './components/AuthButtons.tsx'
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const [home, setHome] = useState(true)
  const [showLoginPage, setShowLoginPage] = useState(false);
  const [showUnity, setShowUnity] = useState(false); // state to toggle Unity component

  const { unityProvider, unload } = useUnityContext({
    loaderUrl: '/unityBuild/AnvilsSecondIteration2.0.loader.js',
    dataUrl: '/unityBuild/AnvilsSecondIteration2.0.data',
    frameworkUrl: '/unityBuild/AnvilsSecondIteration2.0.framework.js',
    codeUrl: '/unityBuild/AnvilsSecondIteration2.0.wasm',
  });

  useEffect(() => {
    const handlePathChange = () => {
      const path = window.location.pathname;
  
      if (path === "/unity") {
        setHome(false);
        setShowUnity(true);
        setShowLoginPage(false);
      } else if (path === "/login") {
        setHome(false);
        setShowLoginPage(true);
        setShowUnity(false);
      } else {
        setHome(true);
        setShowUnity(false);
        setShowLoginPage(false);
      }
    };
  
    // Run once initially
    handlePathChange();
  
    // Optional: run on history change (for manual pushState changes)
    window.addEventListener('popstate', handlePathChange);
  
    return () => window.removeEventListener('popstate', handlePathChange);
  }, []);
  
  const { isLoading } = useAuth0();

  if (isLoading) return <p>Loading Auth...</p>;

  return (
    <>
      <main>
        {!home &&
          <div>
            <button className="home-button" onClick={() => {
              setHome(!home)
              setShowUnity(false)
              setShowLoginPage(false)
              unload();
            }}>
              Home
            </button>

            <AuthButtons home={false}/>
          </div>
        }

        {home &&
          <div>
            <div>
              <h1 style={{ fontFamily: "Daydream", color: "#21ffff", fontSize: "100px" }}>Anvils</h1>
              <p style={{ fontFamily: "PixelGame", fontSize: "50px" }}>
                Uncommon Hacks 2025 <br/>
                Made by: Prem, Catarina, Andrea, Sasha, Surya <br/>
              </p>
            </div>
            
            <div className="card">
              <AuthButtons home={home}/>
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
            <AuthButtons home={home}/>
          </div>
        )}

        {showUnity && (
          <div className='game'>
            <Unity unityProvider={unityProvider}
            style={{ width: "960px", height: "540px" }} />
          </div>
        )}

      </main>
    </>
  )
}

export default App