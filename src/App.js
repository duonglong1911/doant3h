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

  const [usersList, setUsersList] = useState([]);
  const [postsList, setPostsList] = useState([])
  const [isSignedIn, setIsSignedIn] = useState(false);
 
  useEffect(() => {
    const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
     var pushDataRef = firebase.database().ref("user");
            pushDataRef.on('value', (res)=>{
              const data = res.val();
              let postList = []
              for(let id in data){
                  postList.push(
                  data[id].uid,
                  )
              }
                if(user){
                  let users = []
                  for(let id in data) {
                    users.push({
                        id: id,
                        photo:data[id].photo,
                        uid: data[id].uid,
                        displayName: data[id].displayName
                    })
                  }
              setUsersList(users)
                    if(postList.indexOf(user.uid) === -1){
                      firebase.database().ref('user').push({
                        photo:firebase.auth().currentUser.photoURL,
                        uid: firebase.auth().currentUser.uid,
                        displayName: firebase.auth().currentUser.displayName
                      })
                    }
                    else{
                      return false
                    }
                  }
    })
    setIsSignedIn(!!user); 
    });

    const firebaseStore = firebase.database().ref('post');
        firebaseStore.on('value', (res)=>{
            const data = res.val();
            let posts = [];
            for(let id in data){
                posts.push({
                    id: id,
                    desc: data[id].desc,
                    photo: data[id].photo,
                    date: data[id].date,
                    userId: data[id].userId
                })
            }
            setPostsList(posts)
        })
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
              <RouterLink 
              displayName={firebase.auth().currentUser} 
              isSignedIn={isSignedIn}
              usersList={usersList}
              postsList={postsList}
              />
            </StyledApp>
          </ThemeProvider>
    </Router>
  );
}

export default App;

