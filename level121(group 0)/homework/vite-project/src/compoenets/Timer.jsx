import React, { useEffect, useState } from 'react'

export default function Timer() {

    const [minutes,setMinutes] = useState(0)
    const [seconds,setSeconds] = useState(0)
    const [run,setRun] = useState(false)

    useEffect(() => {
        let timer;
        if(run){
            timer = setInterval(() => {
                setSeconds((prevSe) => {
                    if(prevSe === 59){
                        setMinutes(prevMi => prevMi + 1)
                        return 0
                    }
                    return prevSe + 1
                })
            },1000)

        }
        return() => clearInterval(timer)
    },[run])
    const handleClick = () => {
        setRun(true)
    }

    const handleStop = () => {
        setRun(false)
    }

    const handleReset = () => {
        setSeconds(0)
        setMinutes(0)
        setRun(false)
    }

    

   return (
        <div>
            <p>{minutes} : {seconds < 10 ? `0${seconds}` : seconds}</p>
            <button onClick={() => handleClick()}>run</button>
            <button onClick={() => handleStop()}>stop</button>
            <button onClick={() => handleReset()}>reset</button>
        </div>
   )
}
