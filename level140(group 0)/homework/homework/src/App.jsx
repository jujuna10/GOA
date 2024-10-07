import ErrorBoundary from "./component/boundary/ErrorBoundary"
import Home from "./component/Home"
import Clicker from "./component/Clicker"
import Timer from "./component/Timer"
import Loader from "./component/Loading"
import Info from "./component/Info"
import Api from "./component/Api"

function App() {

  return (
    <div>
      <ErrorBoundary>
        <Home />
      </ErrorBoundary>
      <Clicker />
      <Timer />
      <Loader />
      <Info />
      <Api />
    </div>
  )
}

export default App
