import React, { useEffect, useMemo, useState } from 'react'

export default function Factorial() {
    const [num,setNum] = useState(0)

    const number = 10
    const factorial = (number) => {
        if (number < 0) return 0
        if (number === 0 || number === 1) return 1
        let fact = 1
        for (let i = 2; i <= number; i++) {
          fact *= i
        }
        return fact
    }

    const result = useMemo(() => factorial(number),[number])
    useEffect(() => {
        console.log(result)
    },[result])

  return (
    <div>
        <button onClick={() => setNum((prev) => prev + 1)}>{num}</button>
    </div>
  )
}
