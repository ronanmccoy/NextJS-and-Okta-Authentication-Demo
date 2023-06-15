import React from "react";

import styles from '../styles/Home.module.css'

export default function Unauthorized() {
  return (
    <div className="text-center">
      <h1>401 - Unauthorized</h1>
      
      <p className={styles.code}>You are not authorized to view this page.</p>
    </div>
  )
}
