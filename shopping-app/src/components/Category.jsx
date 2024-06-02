import React from 'react'
import { Link } from 'react-router-dom'

export default function Category({children}) {
  return (
    <li style={{ marginLeft: "20px", padding: "3px 8px" }}>
        <Link to="/" className="link-body-emphasis d-inline-flex text-decoration-none rounded">{children}</Link>
    </li>

  )
}
