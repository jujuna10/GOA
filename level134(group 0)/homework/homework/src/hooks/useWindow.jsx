import { useEffect, useState } from "react"

const useWindow = () => {
    const [wWidth,setWWidth] = useState(0)
    const [wHeight,setWHeight] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            setWWidth(window.innerWidth)
            setWHeight(window.innerHeight)
        }

        window.addEventListener('resize',handleResize)
        handleResize()

        return () => {
            window.removeEventListener('resize',handleResize)
        }
    })

    console.log(wWidth,wHeight)

    return [wHeight,wWidth]

}

export default useWindow