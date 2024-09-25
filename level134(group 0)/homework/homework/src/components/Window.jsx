import React from 'react'
import useWindow from '../hooks/useWindow.jsx';


export default function Window() {

    const [wWidth,wHeight] = useWindow()

  return (
    <div>
        <p>{wWidth}</p>
        <p>{wHeight}</p>
    </div>
  )
}
