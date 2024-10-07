import React from "react";

class ErrorBoundary extends React.Component{
    constructor(props){
        super(props)
        this.state = { hasError: false }
    }
    static getDerivedStateFromError(error) {
        return { hasError: error }
      }

    componentDidCatch(error,errorInfo){
        console.log(error)
        console.log(errorInfo)
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