import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {


  const links = ['home','contact']

  return (
    <ul>
      {links.map((path,index) => {
        return (
          // <li key={index}><a href={`/${path}`}>{path}</a></li>
          <Link to={`/${path}`}>{path}</Link>
        )
      })}
    </ul>
  )
}
