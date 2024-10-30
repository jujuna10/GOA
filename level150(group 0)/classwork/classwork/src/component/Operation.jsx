import React, { useMemo } from 'react'

export default function Operation() {
    const number = [10,293,39,401,390,83,38]
    const sorted = useMemo(() => number.sort((a,b) => a - b))
  return (
    <div>
        {sorted.map((item,index) => (
            <p>{item}</p>
        ))}
    </div>
  )
}
