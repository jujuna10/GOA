import Home from "./component/Home"
import About from "./component/About"
import Contact from "./component/Contact"
import Home2 from "./component/Home2"
import FallbackComponent from './component/react-error-boundary/First'
import { ErrorBoundary } from "react-error-boundary";

// import ErrorBoundary from "./component/boundary/First"
import ErrorBoundary2 from "./component/boundary/Boundery"
function App() {

  const handleReset = () => {
    console.log("reset");
    
  }

  const logError = (error,errorInfo) => {
    console.log(error)
  }

  return (
   <div>
      {/* <ErrorBoundary>
        <Home />
      </ErrorBoundary> */}
      {/* <ErrorBoundary>
        <Home />
      </ErrorBoundary>

      <ErrorBoundary>
        <About/>
      </ErrorBoundary>

      <Contact /> */}

      <ErrorBoundary FallBackComponent={FallbackComponent} onReset={handleReset} onError={logError}>
        <Home2 />
      </ErrorBoundary>
      
   </div>
  )
}

export default App
