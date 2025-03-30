import { useAuth0 } from '@auth0/auth0-react'

type Props = {
  home: boolean
}

export default function AuthButtons({ home }: Props) {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } = useAuth0()

  console.log("Auth state:", isAuthenticated, user);

  if (isLoading) return <p>Loading...</p>

  return (
    <div style={ home ? {} : {
      position: "absolute",
      top: "20px",
      right: "20px"
    }}>
      {!isAuthenticated ? (
        <button
          onClick={() =>
            {
              appState: {
                returnTo: "/unity"
              }
            }
          }
        >
          Log In
        </button>
      ) : (
        <>
          <p>Welcome, {user?.name}</p>
          <button
            onClick={() =>
              logout({
                logoutParams: {
                  returnTo: window.location.origin + "/" // <- back to "home screen"
                }
              })
            }
          >
            Log Out
          </button>
        </>
      )}
    </div>
  )
}
