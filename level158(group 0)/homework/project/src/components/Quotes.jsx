import React, { useEffect, useState } from 'react';

function Quotes() {
  const [quotes, setQuotes] = useState([])
  const [quote,setQuote] = useState("")
  const api = "https://zenquotes.io/api/quotes"

  useEffect(() => {
    fetch(api, { mode: 'no-cors' })
      .then(response => response.json())
      .then(data => setQuotes(data))
      .catch(error => console.error("Error fetching quotes:", error))
  }, [])

  console.log(quotes)

  const handleClick = () => {
    const index = Math.floor(Math.random() * quotes.length)
    setQuote(`${quotes[index].q}`)
  }


  return (
    <div>
        <button onClick={handleClick}>click</button>
      <p>{quote}</p>
    </div>
  )
}

export default Quotes
