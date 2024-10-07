// https://jsonplaceholder.typicode.com/users

import React from "react";

class Api extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }
  
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
          this.setState({ data: data });
          console.log(data)
        });
  }

  

  render() {
    return (
      <div>
        {this.state.data.map(item => (
            <p key={item.id}>{item.title}</p>
          ))}
      </div>
    );
  }
}

export default Api;