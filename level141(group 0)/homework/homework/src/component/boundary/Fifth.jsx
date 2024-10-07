import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = { hasError: false, type: null }
    }
    static getDerivedStateFromError(error) {
        return { hasError: error }
      }

    componentDidCatch(error,errorInfo){
        this.setState({ type: error.name })        
    }

    

      render(){
        if(this.state.hasError){
            if(this.state.type === "TypeError")
                return(
                    <h2>TypeError</h2>
                )
            else{
                return(
                    <h2>other</h2>
                )
            }
        }
    
        return this.props.children;
    }
    
}

export default ErrorBoundary;