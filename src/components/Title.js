import React from 'react'

export default function Heading({ title }) {
  return (
    <div className="d-flex justify-content-between align-items-center p-2">
      <h6>{title}</h6>
      <i className="fa fa-ellipsis-h" />
    </div>
  )
}
