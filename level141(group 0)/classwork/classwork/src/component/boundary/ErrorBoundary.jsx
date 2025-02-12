import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = { error: false }
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

export default ErrorBoundary;