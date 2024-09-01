import React, { useEffect, useState } from 'react'
import Presentational from './Presentational'

export default function Container() {

    const [acc,setAcc] = useState([])
    const [lastElement,setLastElement] = useState({})

    const effect = useEffect(() => {
        if(acc.length > 0){
            setLastElement(acc[0])
        }

    },[acc])
    const handleSubmit = (newData) => {

        const isDuplicate = acc.some(account => account.email === newData.email)


        if(isDuplicate){
            alert("error")
        }
        else{
            setAcc((prev) => [newData,...prev])

        }
    }
    console.log(acc)
    



  return (
    <Presentational onSubmit={handleSubmit} acc={acc} setAcc={setAcc} effect={lastElement}/>
  )
}
