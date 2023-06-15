import React from "react";
import { useEffect, useState } from "react";
import { useOktaAuth } from "@okta/okta-react";

import styles from '../styles/Home.module.css'

export default function PublicPage() {
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

  let authStatus = (!userInfo) ? 'Not logged in' : 'Logged in'

  return (
    <div className="text-center">
      <h1>Public Page</h1>

      <p className="text-start">This page should be accessible regardless of authentication status. All the content below is viewable by anyone regardless of authentication status.</p>

      <p className={styles.code}>Current Authentication status: {authStatus}</p>

      <div className="row text-start">
        <div className="col">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus nisl tincidunt eget nullam. Adipiscing elit ut aliquam purus sit.</p>
        </div>
        <div className="col">
        <p>Id velit ut tortor pretium viverra suspendisse. Elit ut aliquam purus sit amet. Dictum varius duis at consectetur lorem donec massa sapien faucibus.</p>
        </div>
        <div className="col">
        <p>Eleifend donec pretium vulputate sapien nec sagittis aliquam. Leo in vitae turpis massa. Egestas sed sed risus pretium quam vulputate dignissim.</p>
        </div>
      </div>
    </div>
  )
}
