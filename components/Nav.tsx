import Link from 'next/link'
import React, { useState } from 'react'
import { useOktaAuth, LoginCallback } from '@okta/okta-react'

const Nav = () => {
  const { oktaAuth, authState } = useOktaAuth();

  const [redirectRoute, setRedirectRoute] = useState<string>('/');

  const oktaLogin = () => {
    setRedirectRoute("/");
    oktaAuth.signInWithRedirect({ originalUri: redirectRoute})
  }

  let signInComponent = null;

  signInComponent = (authState && authState.isAuthenticated) ? <Link onClick={() => oktaAuth.signOut()} className="btn btn-outline-primary" href={''}>Sign Out</Link> : <Link onClick={oktaLogin} className="btn btn-outline-primary" href={''}>Sign In</Link>
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" href="/">NextJS-Okta</Link>
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
              <Link className="nav-link" href="/private_page">Secure Page</Link>
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
