import React, { useMemo, useState } from 'react'

export default function Fruit() {
    const [search,setSearch] = useState("")
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple', 'Grapes'];

    const filteredFruit = useMemo(() => {
        return fruits.filter(fruit => fruit.toLocaleLowerCase().includes(search.toLocaleLowerCase()))
    },[search,fruits])
  return (
    <div>
        <input type="text" name="search" onChange={(e) => setSearch(e.target.value)}/>

        <div>
            {filteredFruit.map((item,index) => (
                <p>{item}</p>
            ))}
        </div>
    </div>
  )
}
