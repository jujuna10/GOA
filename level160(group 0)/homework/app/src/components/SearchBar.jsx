import React, { useEffect, useState } from 'react'

function SearchBar() {
    const [dataa,setDataa] = useState([])
    const [loading, setLoading] = useState(true)
    const [inputValue,setInputValue] = useState('')
    const [result,setResult] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/recipes')
        .then((response) => response.json())
        .then((data) => {
            setDataa(data.recipes || [])
            setLoading(false)
        })
        .catch((error) => console.log(error))
    },[])

    
    const handleSubmit = (e) => {
        e.preventDefault()
        const recipeResult = dataa.filter((recipe) => recipe.name.toLowerCase().includes(inputValue.toLowerCase()))
        setResult(recipeResult)
        setInputValue('')
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" name="recipe" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
            <button>submit</button>
        </form>

        <div>
            {loading ? (
                <p>loading...</p>
            ) :result.map((item,index) => (
                <div>
                    <p>{item.name}</p>
                    <p>{item.ingredients}</p>
                    <p>{item.instructions}</p>

                </div>
            ))}
        </div>
    </div>
  )
}

export default SearchBar