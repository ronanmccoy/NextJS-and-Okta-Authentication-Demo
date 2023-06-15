import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Integrating Okta and <a href="https://nextjs.org">Next.js</a>.<br/>An example.
        </h1>

        <p className={styles.description}>
          This is a simple demo showing Okta being used for authentication in NextJS. The goal is simple: allow users to log in with their Okta account. To start, ensure you have a valid Okta account and Okta application set up. Then click the <span className={styles.code}>Sign In</span> button above to log in via Okta.
        </p>
          
        <p className={styles.description}>
        Once successfully logged in, the <span className={styles.code}>Sign In</span> button in the navigation above will change to <span className={styles.code}>Sign Out</span>. If authentication fail, the button remains <span className={styles.code}>Sign In</span>.
        </p>
      </main>
    </div>
  )
}
