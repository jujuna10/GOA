import { useEffect, useState } from "react"

const useTimer = () => {
    const [hour, setHour] = useState(0)
    const [minute, setMinute] = useState(0)
    const [second, setSecond] = useState(0)
    const [start, setStart] = useState(false)

    useEffect(() => {
        let interval
        if (start) {
            interval = setInterval(() => {
                setSecond((prev) => {
                    if (prev === 59) {
                        setMinute((min) => {
                            if (min === 59) {
                                setHour((hour) => hour + 1)
                                return 0
                            }
                            return min + 1
                        })
                        return 0
                    }
                    return prev + 1
                })
            }, 1000)
        }

        return () => clearInterval(interval)

    }, [start])

    const handleStart = () => {
        setStart(true)
    }

    const handleStop = () => {
        setStart(false)
    }

    const handleReset = () => {
        setStart(false)
        setSecond(0)
        setMinute(0)
        setHour(0)
    }

    return [second, minute, hour, handleStart, handleStop, handleReset]
}

export default useTimer
