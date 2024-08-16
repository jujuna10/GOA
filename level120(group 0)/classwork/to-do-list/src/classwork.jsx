import React, { useState } from "react";

const FormComponent = () => {
    const [data,setData] = useState([])

    const [name,setName] = useState("")
    const [surname,setSurname] = useState("")
    const [email,setEmail] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        const user = {name,surname,email}
        setData([...data,user])
    }

    





    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)}/>
                <input type="text" name="lastname" onChange={(e) => setSurname(e.target.value)}/>
                <input type="email" name="email" onChange={(e) => setEmail(e.target.value)}/>
                <button type="submit">click</button>
            </form>

            <ul>
                {
                    data.map((userInfo,index) => (
                        <li key={index}>{userInfo.name} {userInfo.surname} {userInfo.email}
                        </li>
                    ))
                }
            </ul>
        </div>

        
    )
}

export default FormComponent
