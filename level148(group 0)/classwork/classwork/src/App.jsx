import UserList from './UserList'
import { ErrorBoundary } from "react-error-boundary";
import FallBack from './boundery/FallBack'




function App() {

  return (
    <>
      <ErrorBoundary FallbackComponent={FallBack}>
        <UserList />
      </ErrorBoundary>

    </>
  )
}

export default App
