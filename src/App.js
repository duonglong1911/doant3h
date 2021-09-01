import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme, GlobalStyles} from './themes.js'
import { BrowserRouter as Router } from 'react-router-dom';
import RouterLink from './RouterLink';
import Header from './components/layout/header/Header';
import Login from './components/pages/login/Login.jsx';
import './app.css';
import firebase from 'firebase';

const StyledApp = styled.div`
  color: ${(props => props.theme.fontColor)};
  share: ${(props => props.theme.backgroundColor)};
`

const config = {
  apiKey: "AIzaSyAGKQy0I3gi1LvjrcTglcZghqB7DG8FVDc",
  authDomain: "notebook-993f2.firebaseapp.com",
  projectId: "notebook-993f2",
  storageBucket: "notebook-993f2.appspot.com",
  messagingSenderId: "206579832087",
  appId: "1:206579832087:web:562e8007ed170224d59352",
  measurementId: "G-VSHKGQTY0W"
};

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: 'popup',
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

firebase.initializeApp(config);
function App() {

  const [theme, setTheme] = useState('light');
  const themeToggle = () => {
    theme ==='light' ? setTheme("dark") : setTheme("light");
  }

  // const [testDataUser, setIsTestDataUser]= useState('');
  const [isSignedIn, setIsSignedIn] = useState(false);
 
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
      setIsSignedIn(!!user);
      
      
      var pushDataRef = firebase.database().ref("user");
      pushDataRef.on("child_added", function(snapshot){
        if(snapshot.val().uid !== firebase.auth().currentUser.uid){
        
          // firebase.database().ref('user').push({
          //   photo:firebase.auth().currentUser.photoURL,
          //   uid: firebase.auth().currentUser.uid,
          //   displayName: firebase.auth().currentUser.displayName
          // })
        }
        else{
          return false
        }
      });
    
    });

      

    return () => unregisterAuthObserver(); 
    
  },[]);
 
  localStorage.setItem('isSignedIn',isSignedIn)
  if (!isSignedIn) {
    
    return (
      <div>
        <Login uiConfig={uiConfig}/>
      </div>
    );
  }
  return (
    <Router>
          <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme } >
          <GlobalStyles />
            <StyledApp>
            {isSignedIn && <Header handleToggleDarkmode={themeToggle} displayName={firebase.auth().currentUser}/>}
              <RouterLink displayName={firebase.auth().currentUser} isSignedIn={isSignedIn}/>
            </StyledApp>
          </ThemeProvider>
    </Router>
  );
}

export default App;

