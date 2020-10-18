import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBsHokX2bjHGGgCAuN31X8OlNxl6hzQfzw",
    authDomain: "hack-nc-9c9cb.firebaseapp.com",
    databaseURL: "https://hack-nc-9c9cb.firebaseio.com",
    projectId: "hack-nc-9c9cb",
    storageBucket: "hack-nc-9c9cb.appspot.com",
    messagingSenderId: "1070251506906",
    appId: "1:1070251506906:web:afbd181d76979ca55f39e3",
    measurementId: "G-9NZ7Z274DC"
  };

  const fireBaseInit = firebase.initializeApp(firebaseConfig)
  export default fireBaseInit;