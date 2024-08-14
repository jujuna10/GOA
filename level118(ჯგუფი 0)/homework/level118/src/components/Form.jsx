// 7. **Form Submission**: Create a simple form with two input fields (e.g., name and email). When the form is submitted, display the entered values below the form.

import React, { useState } from "react";

export default function FormComponent() {
  const [inputValues, setInputValues] = useState({
    name: "",
    email: "",
  });



    const handleChange = (event) => {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({
        ...prevValues,
        [name]: value,
        }));
    };

    const [formSubmit,setFormSubmit] = useState(null)
    const handleSubmit = (e) => {
        e.preventDefault()
        setFormSubmit(inputValues)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
            name="name"
            placeholder="Input 1"
            value={inputValues.input1}
            onChange={handleChange}
        />
        <input
            name="email"
            placeholder="Input 2"
            value={inputValues.input2}
            onChange={handleChange}
        />
        <button type="submit">click</button>

        </form>
        
        {formSubmit && (<div>
            <p>Name: {formSubmit.name}</p>
            <p>Email: {formSubmit.email}</p>
        </div>)}
    </div>
  )

}

