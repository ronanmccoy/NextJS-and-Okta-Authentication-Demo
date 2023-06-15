import React, { useCallback, useState } from 'react'
import { useRouter } from 'next/router'

import { OktaAuth, toRelativeUrl } from '@okta/okta-auth-js'
import { Security, SecureRoute, LoginCallback } from '@okta/okta-react'

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  const router = useRouter()


  // set up config for Okts
  const oktaConfig = new OktaAuth({
    issuer: process.env.NEXT_PUBLIC_OKTA_ISSUER,
    clientId: process.env.NEXT_PUBLIC_OKTA_CLIENT_ID,
    redirectUri: process.env.NEXT_PUBLIC_OKTA_REDIRECT_URI,
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
  })


  // handle redirecting to the original URL after login
  const restoreOriginalUri = useCallback(async (_oktaAuth: OktaAuth, originalUri: string) => {
    router.replace(toRelativeUrl(originalUri || '/', window.location.origin))
  }, [
    router,
  ])


  return (
    <Security oktaAuth={oktaConfig} restoreOriginalUri={restoreOriginalUri} >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Security>
  )
}

export default MyApp
