import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


// const firebaseConfig = {

//     apiKey:process.env.APIKEY,
//     authDomain:process.env.AUTHDOMAIN, 
//     projectId:process.env.PROJECTID, 
//     storageBucket:process.env.STORAGEBUCKET, 
//     messagingSenderId:process.env.MESSAGINGSENDERID, 
//     appId:process.env.APPID, 
//     measurementId:process.env.MEASUREMENTID,

//   };
  
  const firebaseConfig = {
    
      apiKey: "AIzaSyAx9r1qzM7kW3CIbtSsEZ4GXwgst5Hbt-U",
      authDomain: "juornal-app-35237.firebaseapp.com",
      projectId: "juornal-app-35237",
      storageBucket: "juornal-app-35237.appspot.com",
      messagingSenderId: "557665180552",
      appId: "1:557665180552:web:199bba1db1540fe0f7b83d",
      measurementId: "G-94T9VQ2040"
    };

    
    // Initialize Firebase
  // if(process.env.NODE_ENV === 'test') {
  //   // testing
  // firebase.initializeApp( firebaseConfigTest );      
  // }else {

    
  // }
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



  const db = firebase.firestore();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


  export  {
      db,
      googleAuthProvider,
      firebase
  }