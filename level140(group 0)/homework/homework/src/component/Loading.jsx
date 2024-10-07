import React from "react";

class Loader extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: "loading" }
    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({data: "data loaded"})
        }, 3000);
    }

    render() {
        return (
          <div>
            <p>{this.state.data}</p>
          </div>
        );
      }
}

export default Loader;

