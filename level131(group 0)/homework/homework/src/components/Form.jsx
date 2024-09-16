import React from 'react'
// import { Link } from 'react-router-dom'
import {Link} from 'react-router-dom'



export default function Form({ setCity }) {

    const handleSubmit = (e) => {
        e.preventDefault();
        const cityValue = e.target.elements.valuee.value;
        setCity(cityValue);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="valuee" id="" />
                <Link to='/result'><button type='submit'>submit</button></Link>
            </form>
        </div>
    )
}
