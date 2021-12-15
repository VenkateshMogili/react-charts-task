import React from 'react'

export default function Card({ children }) {
  return (
    <div className="card shadow rounded col-md-4 m-2 p-2 col-sm-12 col-xs-12">
      {children}
    </div>
  )
}
