import Home from './components/Home'
import { ThemeProvider } from './components/context/DataContext'
import { UserProvider } from './components/context/Autentication'
import { LanguageProvider } from './components/context/Language'
import Language from './components/Language'


import Login from './components/Login'


function App() {

  return (
    // <ThemeProvider initialTheme='light'>
    //   <div>
    //     <Home />
    //   </div>
    // </ThemeProvider>

    // <UserProvider user={{name:"dkoodk",password:"dkodokd"}}>
    //   <Login />
    // </UserProvider>

    <LanguageProvider>
      <Language />
    </LanguageProvider>

  )
}

export default App
