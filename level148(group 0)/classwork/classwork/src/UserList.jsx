import React, { useState, useEffect } from 'react';

export default function UserList() {
  const [user, setUser] = useState([])
  
  const fetchData = () => {
    fetch('https:///users') 
      .then(response => response.json())
      .then(data => setUser(data));
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
      <div>
        {user.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
      </div>
  )
}
