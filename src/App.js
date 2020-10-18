import React, { useState, useEffect } from 'react';
import './App.css';
import firebase from 'firebase'
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import fireBaseInit from './firebase'
import Form from './Form'


function App() {
  const [signedIn, setSignedIn] = useState(false)
  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      setSignedIn(!!user)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        {signedIn ?
          <div>
            <Form />
          </div>
          :
          <div>
            <StyledFirebaseAuth
              uiConfig={uiConfig}
              firebaseAuth={firebase.auth()}
            />
            
          </div>
        }
      </header>
    </div>
  );
}

export default App;
