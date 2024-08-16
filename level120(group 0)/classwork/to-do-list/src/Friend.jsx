import React, {useState } from "react";

const Friend = () => {
    const [account,setAccount] = useState([])
    const [friend,setFriend] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const lastName = e.target.lastname.value
        const email = e.target.email.value
        setAccount([...account,{name,lastName,email}])
    }

    const handleDelete = (index) => {
        setAccount(account.filter((_,i) => i!== index))
    }

    const handleAdd = (index) => {
        const acc = account[index]
        setFriend([...friend,acc])
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Name: " />
            <input type="text" name="lastname" placeholder="Lastname: " />
            <input type="text" name="email" placeholder="Email: " />
            <button type="submit">click</button>
            </form>

            <ul>
                {
                    account.map((accObj,index) => {
                        return(
                            <li key={index}>
                                <p>{accObj.name} {accObj.lastName} {accObj.email}</p>
                                <button type="button" onClick={() => handleDelete(index)}>remove</button>
                                <button type="button" onClick={() => handleAdd(index)}>add</button>

                                
                            </li>

                        )
                        
                    })
                }
            </ul>
            <h2>friend list</h2>
            <ul>
                {
                    friend.map((friendObj,index) => {
                        return(
                        <li key={index}>
                            <p>{friendObj.name} {friendObj.lastName} {friendObj.email}</p>
                        </li>

                        )
                    })
                }
            </ul>
        </div>
    )

}

export default Friend
