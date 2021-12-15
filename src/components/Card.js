import React from 'react'

export default function Card({ children }) {
  return (
    <div className="card shadow rounded col-md-4 m-2 p-2">
      {children}
    </div>
  )
}
