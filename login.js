import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js'; 
import {getDatabase, set ,child,get ,ref } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js" ;
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from  "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getStorage, ref as sref , getDownloadURL,uploadBytes } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";




const firebaseConfig = {
  apiKey: "AIzaSyBjQPLDkBFiLT4nLXR_k9EcBHn9LSuJEX0",
  authDomain: "Farm2Market.firebaseapp.com",
  databaseURL: "https://agribuzz1-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "Farm2Market1",
  storageBucket: "Farm2Market1.appspot.com",
  messagingSenderId: "998287684849",
  appId: "1:998287684849:web:c846acfa9bef6ba1052550",
  measurementId: "G-71TM17GP8Y"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);






  document.getElementById("log").onclick =  async() => {
  
    let d = document.getElementById("username").value;
    let e = document.getElementById("password").value;
    // let afd = prompt("in js234 function")

    signInWithEmailAndPassword(auth, d, e)
    .then((userCredential) => {
        
      window.location.replace("index1.html"); 

      const user = userCredential.user;
     
     

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage,errorCode)
      document.getElementById("data").innerHTML = "Login Failed "+errorMessage;
    });

   

    
  }
 
