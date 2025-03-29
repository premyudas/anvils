import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Auth0Provider } from '@auth0/auth0-react'

// Replace these with your actual Auth0 values
const domain = "dev-1vtalhqshkkmc6ik.us.auth0.com"
const clientId = "Q2hr0vwu25p7bHWmIlaK0dvFseormZVO"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Auth0Provider
      domain={domain}
      clientId={clientId}
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <App />
    </Auth0Provider>
  </StrictMode>,
)
