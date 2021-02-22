import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDJ8dzzP_A9UFH62k0JQdMa_dO5ksHCn34",
    authDomain: "crud-b9017.firebaseapp.com",
    projectId: "crud-b9017",
    storageBucket: "crud-b9017.appspot.com",
    messagingSenderId: "602925306394",
    appId: "1:602925306394:web:6e645d538e7c9c46ce37a3"
  }

  export const firebaseApp = firebase.initializeApp(firebaseConfig)
