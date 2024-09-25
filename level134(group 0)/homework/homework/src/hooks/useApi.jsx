import { useEffect, useState } from "react"

const useApi = () => {
    const [loading,setLoading] = useState(true)
    const [data,setData] = useState([])
    const [error,setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch('https://jsonplaceholder.typicode.com/comments')

                if(!response.ok){
                    throw new Error('dont work')
                }

                const result = await response.json()
                setData(result)
            }catch(error){
                setError(error.message)
            }finally{
                setLoading(false)
            }

        }

        fetchData()
    },[])

    return [loading,data,error]
}

export default useApi

