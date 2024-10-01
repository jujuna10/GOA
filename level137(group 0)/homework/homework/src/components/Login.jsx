import React, { useContext } from 'react';
import { UserContext } from './context/Autentication';


export default function Login() {

    const {isLogged,setIsLogged} = useContext(UserContext)

    const handleLogIn = (e) => {
        e.preventDefault()
        if(e.target.name.value.length > 0 && e.target.password.value.length > 0 ){
            setIsLogged(true)
            console.log("yes")
        }else(
            setIsLogged(false)
        )
    }

    const handleOut = (e) => {
        e.preventDefault()
        setIsLogged(false)
    }

  return (
    <div>
        <form onSubmit={handleLogIn}>
            <input type="text" name="name"/>
            <input type="password" name="password" />
            <button type='submit'>submit</button>
        </form>
        <button onClick={handleOut}>out</button>
        {isLogged ? <p>welcome</p> : <p>login</p>}
    </div>
  )
}
