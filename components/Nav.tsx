import Link from 'next/link'
import React, { useState } from 'react'
import { useOktaAuth } from '@okta/okta-react'

const Nav = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const [redirectRoute, setRedirectRoute] = useState<string>('/');

  const oktaLogin = () => {
    console.log("oktaLogin called (with redirect route " + redirectRoute + ")")
    oktaAuth.signInWithRedirect({ originalUri: redirectRoute})
  }

  let signInComponent = null;

  if(authState && authState.isAuthenticated) {
    signInComponent = <Link onClick={() => oktaAuth.signOut()} className="btn btn-outline-primary" href={''}>Sign Out</Link>
  } else {
    signInComponent = <Link onClick={oktaLogin} className="btn btn-outline-primary" href={''}>Sign In</Link>
  }
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" href="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/public_page">Public Page</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/private_page">Private Page</Link>
            </li>
            <li className="nav-item">
              {signInComponent}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
