import React from 'react'
import useTimer from '../hooks/useTimer.jsx';


export default function Timer() {

    const [second,minute,hour,handleStart,handleStop,handleReset] = useTimer()

  return (
    <div>
        <p>{hour}:{minute}:{second}</p>
        <button onClick={handleStart}>start</button>
        <button onClick={handleStop}>stop</button>
        <button onClick={handleReset}>reset</button>
    </div>
  )
}
