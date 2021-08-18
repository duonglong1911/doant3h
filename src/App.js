import Home from './components/pages/home/Home'
import Profile from './components/pages/profile/Profile';
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles} from './themes.js'

const StyledApp = styled.div`
  color: ${(props => props.theme.fontColor)};
  share: ${(props => props.theme.backgroundColor)};
`


function App() {

  const [theme, setTheme] = useState('dark');
  const themeToggle = () => {
    theme ==='light' ? setTheme("dark") : setTheme("light");
  }
  
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme } >
      <GlobalStyles />
      <StyledApp>
        <Home handleToggleDarkmode = {themeToggle} />
        {/* <Profile /> */}
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
