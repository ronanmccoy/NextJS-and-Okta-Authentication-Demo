import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useOktaAuth } from "@okta/okta-react";

import styles from '../styles/Home.module.css'

export default function PrivatePage() {
  const router = useRouter();
  const { oktaAuth, authState } = useOktaAuth();
  const [userInfo, setUserInfo] = useState<any | null>(null);

  useEffect(() => {
    if(authState) {
      if(!authState.isAuthenticated) {
        // When user isn't authenticated, forget any user info
        setUserInfo(null)
      } else {
        oktaAuth.getUser().then((info: any) => {
          setUserInfo(info)
        }).catch((err: any) => {
          console.log(err)
        })
      }
    } else {
      setUserInfo(null)
    }
  }, [authState, oktaAuth])

  let authStatus = 'Not logged in'

  if(!authState || !authState.isAuthenticated) {
    router.replace('/unauthorized')
  }
  
  if(authState && authState.isAuthenticated) {
    console.log(userInfo);
    authStatus = 'Logged in'
  }

  return (
    <div className="text-center">
      <h1>Private Page</h1>

      <p className={styles.code}>Authentication status: {authStatus}</p>

      <p>
        This is a secure page that requires authentication. You can only view this page when you are logged in.
      </p>

      <blockquote className="blockquote">
        The Hapsburg napkin fold is a way of folding the napkin into a shape resembling a bishop's mitre. And the knowledge of how to do it has been a closely guarded secret for generations. Until now...
      </blockquote>
    </div>
  )
}
