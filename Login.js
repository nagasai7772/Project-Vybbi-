let Name=document.getElementById("Name")
var Email=document.getElementById("Email")
var Password=document.getElementById("Password")
let Name_Error=document.getElementById("Name_Error")
let Email_Error=document.getElementById("Email_Error")
let Password_Error=document.getElementById("Password_Error")
let submit_btn=document.getElementById("submit_btn")

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import{getAuth,signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js"

const firebaseConfig = {
    apiKey: "AIzaSyCudA1O3fMYfB-lS4HQ4oxBa6pY6f23rqg",
    authDomain: "vybbii.firebaseapp.com",
    projectId: "vybbii",
    storageBucket: "vybbii.firebasestorage.app",
    messagingSenderId: "972908260004",
    appId: "1:972908260004:web:5b41d7c490898cc3201431"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth=getAuth(app);

submit_btn.addEventListener("click",()=>
{
    signInWithEmailAndPassword(auth,Email.value,Password.value)
      .then((userCredential)=>
      {
          const user=userCredential.user;
          console.log("user signed",user);
          alert("success",user)

          window.open("./index2.html")
          
      })
      .catch((error)=>
      {
              const errorCode=error.code;
              const errorMessage=error.message;
              console.log("signuperror",errorCode,errorMessage);
              alert("failed",errorMessage)
              
      })
      let isValid = true;
      if(Name.value=="")
        {
            Name.style.borderColor="red"
            Name_Error.style.display="inline"
            Name_Error.style.color="red"
            isValid=false
        }
        if(Email.value=="")
            {
                Email.style.borderColor="red"
                Email_Error.style.display="inline"
                Email_Error.style.color="red"
                isValid=false
            }if(Password.value=="")
                {
                    Password.style.borderColor="red"
                    Password_Error.style.display="inline"
                    Password_Error.style.color="red"
                    isValid=false
                }
            //     if (isValid) {
            //       const userSpan = document.getElementById("USER");
            //       // userSpan.textContent = `Welcome, ${Name}!`;
            //       // userSpan.style.display = "block";
            //     //   alert(userSpan.textContent=`Welcome ${Name}`)
            //   }
    
    
})

// function submit_btn() 
// }



            // // Validate inputs
            // if (!Name) {
            //   Name_Error.style.display = "inline";
            //     isValid = false;
            // }
            // if (!Email) {
            //     Email_Error.style.display = "inline";
            //     isValid = false;
            // }
            // if (!Password) {
            //   Password_Error.style.display = "inline";
            //     isValid = false;
            // }

            // // If valid, display welcome message
            // if (isValid) {
            //     const userSpan = document.getElementById("USER");
            //     userSpan.textContent = `Welcome, ${Name}!`;
            //     userSpan.style.display = "block";
            // }
        