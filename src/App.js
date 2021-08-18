import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles} from './themes.js'
import { BrowserRouter as Router } from 'react-router-dom';
import RouterLink from './RouterLink';
import Header from './components/layout/header/Header';

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
    <div>
      <Router>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme } >
        <GlobalStyles />
        <StyledApp>
        <Header handleToggleDarkmode={themeToggle} />
          <RouterLink/>
        </StyledApp>
      </ThemeProvider>
    </Router>
    </div>
  );
}

export default App;
