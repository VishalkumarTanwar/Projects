import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js'; 
import {getDatabase, set ,child,get ,ref } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-database.js" ;
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from  "https://www.gstatic.com/firebasejs/9.8.2/firebase-auth.js";
import { getStorage, ref as sref , getDownloadURL,uploadBytes } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-storage.js";




const firebaseConfig = {
  apiKey: "AIzaSyBjQPLDkBFiLT4nLXR_k9EcBHn9LSuJEX0",
  authDomain: "Farm2Market1.firebaseapp.com",
  databaseURL: "https://Farm2Market1-default-rtdb.asia-southeast1.firebasedatabase.app",
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


  document.getElementById("sub").onclick =  function() {
   
    let fo = document.getElementById("register").value;
    let a = document.getElementById("fname").value;
    let b = document.getElementById("lname").value;
    let c = document.getElementById("number").value;
    let d = document.getElementById("email").value;
    let e = document.getElementById("pass").value;
    // let afd = prompt("in js234 function")

    createUserWithEmailAndPassword(auth, d, e)
    .then((userCredential) => {
        document.getElementById("result").innerHTML = "Registerd succesfull";
        let f = d.indexOf("@");
        let g = d.slice(0, f);
      
        console.log(a,b,c,d,e); 
        const db = getDatabase();
        // let afd = prompt("in js234 function")
        set(ref(db,'Registers/'+ c), {
            Firstname: a,
            Lastname: b,
            Number: c,
            Email: d,
            password: e,

        });

      const user = userCredential.user;
      
      setTimeout(myFunction, 2000)

    })
    .catch((error) => {
       
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage,errorCode)
      document.getElementById("result").innerHTML = "login Unscussfull"+errorMessage;
    });

   

    
  }
 
  function myFunction() {
    window.location.replace("login.html"); 
  }


//   let a =  document.getElementById("loo");
//  a.onclick = async() =>{
 
  
//  }






