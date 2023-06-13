import React from 'react'
import Head from 'next/head'
import Nav from './Nav'
import Footer from './Footer'


const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <metadata name="viewport" content="width=device-width, initial-scale=1" />
        <metadata name="description" content="Next.js Auth0" />
        <title>NextJS and Okta... oh, my!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Nav />
        {children}
        <Footer />
      </div>
    </>
  )
}

export default Layout
