import React, { useState } from 'react';

function Contact() {
  const password = 'swordfish';
  const [authorized, setAuthorized] = useState(false);
  console.log(authorized)

  function handleSubmit(e) {
    e.preventDefault();
    const enteredPassword = e.target.querySelector('input[type="password"]').value;
    const auth = enteredPassword === password;
    setAuthorized(auth);
  }

  if (authorized) {
    return (
      <div id="authorization">
        <h1>Contact</h1>
        <ul>
          <li>client@example.com</li>
          <li>555.555.5555</li>
        </ul>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="password" placeholder="Enter password" />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Contact;

