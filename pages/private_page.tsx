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
    console.log("below should be auth status");
    console.info(authState);
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

  let authStatus = ''
  let secretInfo = '';

  if(!userInfo) {
    authStatus = 'Not logged in'
    secretInfo = ''
  } else {
    authStatus = 'Logged in'
    secretInfo = 'The Hapsburg napkin fold is a way of folding the napkin into a shape resembling a bishop\'s mitre. And the knowledge of how to do it has been a closely guarded secret for generations. Until now...'
  }

  return (
    <div className="text-center">
      <h1>Private Page</h1>

      <p className={styles.code}>Authentication status: {authStatus}</p>

      <p>This is the private page that requires authentication. If you are logged in then there should be some secret information in the next paragraph, otherwise there is no next paragraph.</p>
      <p>{secretInfo}</p>
    </div>
  )
}
