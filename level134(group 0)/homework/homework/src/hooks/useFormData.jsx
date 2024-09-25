import { useState } from "react"


const useFormData = () => {
    const [formData,setFormData] = useState({})
    
    const handleChange = (e) => {
        const {name, value } = e.target
        setFormData({...formData, [name]: value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    
    return [formData,handleChange,handleSubmit]
}

export default useFormData;