import React from "react";

class Info extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.inputRef = React.createRef();
  }

  submited = (e) => {
    e.preventDefault()
    this.setState({name:this.inputRef.current.value})
  }
  

  render() {
    return (
      <div>
        <form onSubmit={this.submited}>
            <input type="text" name="name" ref={this.inputRef}/>
            <button type="submit">submit</button>

        </form>
        <p>{this.state.name}</p>
      </div>
    );
  }
}

export default Info;