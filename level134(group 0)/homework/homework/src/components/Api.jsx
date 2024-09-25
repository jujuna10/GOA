import React from 'react'
import useApi from '../hooks/useApi.jsx';


export default function Api() {

    const [loading,data,error] = useApi()

  return (
    <div>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {!loading && !error && (
            <div>
                {data.map((item,index) => {
                    return(
                        <p key={index}>{item.name}</p>
                    )
                })}
            </div>
        )}
    </div>
  )
}
