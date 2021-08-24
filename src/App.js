import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles} from './themes.js'
import { BrowserRouter as Router } from 'react-router-dom';
import RouterLink from './RouterLink';
import Header from './components/layout/header/Header';
// import Login from './components/pages/login/Login.jsx';

const StyledApp = styled.div`
  color: ${(props => props.theme.fontColor)};
  share: ${(props => props.theme.backgroundColor)};
`


function App() {

  const [theme, setTheme] = useState('light');
  const themeToggle = () => {
    theme ==='light' ? setTheme("dark") : setTheme("light");
  }


  const [isLogin, setIsLogin] = useState(false);
  const onClickRedirect = () =>{
    setIsLogin(!isLogin)
  }
  return (
    <div>
        <Router>
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme } >
                <GlobalStyles />
                  <StyledApp>
                  {isLogin && <Header handleToggleDarkmode={themeToggle} onClickRedirect={onClickRedirect}/>}
                    <RouterLink onClickRedirect={onClickRedirect} isLogin={isLogin}/>
                  </StyledApp>
          </ThemeProvider>
        </Router>
    </div>
  );
}

export default App;
