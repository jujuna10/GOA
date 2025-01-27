'use client'
export default function Main() {

    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:3001/items', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
        },
          body: JSON.stringify({
            name: e.target.name.value,
            price: e.target.price.value,
            category: e.target.category.value,
            stock: e.target.stock.value,
        })

        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('Success:', data);
  
    }

    return (
  
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name"></input>
          <input type="number" name="price"></input>
          <input type="text" name="category"></input>
          <input type="name" name="stock"></input>
          <button>submit</button>
        </form>
      </div>
    );
  }

  