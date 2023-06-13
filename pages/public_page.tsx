import React from "react";

export default function PublicPage() {
  return (
    <div className="text-center">
      <h1>Public Page</h1>
      <p>This page should be accessible regardless of authentication status.</p>
      <p>Log-in using the navigation above.</p>
    </div>
  )
}
