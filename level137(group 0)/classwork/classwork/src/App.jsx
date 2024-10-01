import { useState } from 'react'
// import { ThemeContext, ThemeProvider, useTheme } from './components/context/DataContext'

import Theme from './components/Theme';
import { ThemeProvider } from './components/context/DataContext2';


  // const ThemeComponent = () => {
  //   const theme = useTheme()

  //   return (
  //     <div style={{backgroundColor: theme.backgroundColor}}>
  //       <h1>hello</h1>
  //     </div>
  //   )
  // }

  function App() {
    // return(
    //   <div>
    //     <ThemeProvider value={{backgroundColor:"black"}}>
    //       <ThemeComponent />
    //     </ThemeProvider>

    //     <ThemeProvider value={{backgroundColor:"yellow"}}>
    //       <ThemeComponent />
    //     </ThemeProvider>
    //   </div>
    // )

    return(
      <div>
          <ThemeProvider initialTheme="white">
              <Theme />
          </ThemeProvider>

      </div>
    )
  
}

export default App
