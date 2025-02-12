import React from "react";

class ErrorBoundary2 extends React.Component{
    constructor(props){
        super(props)
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error) {
        return { hasError: error }
      }

      render(){
        if(this.state.hasError){
            return(
                <h2>Something went wrong</h2>
            )
        }
    
        return this.props.children;
    }
    
}

export default ErrorBoundary2;