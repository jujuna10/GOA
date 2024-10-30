import React, { memo, useCallback, useState } from 'react'

const MemoAndCall = memo(({age}) => {
    const [count,setCount] = useState(0)

    const Add = useCallback(() => {
        setCount((prev) => prev + 1)
        console.log(count)
    },[count])
  return (
    <div>
        <p>{age}</p>
        <p>{count}</p>
        <button onClick={Add}>add</button>
    </div>
  )
})
