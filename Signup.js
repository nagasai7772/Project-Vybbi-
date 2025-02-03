let Signup_btn = document.getElementById("Signup_btn");
var Email = document.getElementById("Email");
var Password = document.getElementById("Password");
 let Checkbox=document.getElementById("Check_box");
let ReEnter_pass = document.getElementById("Re-Enter");
let Pass_error = document.getElementById("Pass_error");
let Email_error = document.getElementById("Email_error");
let Repass_error = document.getElementById("Repass_error");
let Name_error = document.getElementById("Name_error");
let Name = document.getElementById("Name");

Checkbox.addEventListener("click",()=>
{
  
  if (Password.type == "password" && ReEnter_pass.type == "password") {
    Password.type = "text";
    ReEnter_pass.type = "text";
  } else {
    Password.type = "password";
    ReEnter_pass.type = "password";
  }
})
//**Signup Authication */

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCudA1O3fMYfB-lS4HQ4oxBa6pY6f23rqg",
  authDomain: "vybbii.firebaseapp.com",
  projectId: "vybbii",
  storageBucket: "vybbii.firebasestorage.app",
  messagingSenderId: "972908260004",
  appId: "1:972908260004:web:5b41d7c490898cc3201431",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

Signup_btn.addEventListener("click", () => {
  if (Email.value === "") {
    Email.style.borderColor = "red";
    Email_error.style.display = "inline";
    Email_error.style.color = "red";
  }
  if (Password.value === "") {
    Password.style.borderColor = "red";
    Pass_error.style.display = "inline";
    Pass_error.style.color = "red";
  }
  if (ReEnter_pass.value === "") {
    ReEnter_pass.style.borderColor = "red";
  }
  if (Name.value == "") {
    Name_error.style.display = "inline";
    Name_error.style.color = "red";
    Name.style.borderColor = "red";
  }
  if (Password.value !== ReEnter_pass.value) {
    console.log("yes");
    Password.style.borderColor = "red";
    ReEnter_pass.style.borderColor = "red";
    Repass_error.style.display = "inline";
    Repass_error.style.color = "red";
  }
  // function hide() {
  // }
  
  createUserWithEmailAndPassword(auth, Email.value, Password.value)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user signed", user);
      alert("success", user);
      window.open("./index4.html")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("signuperror", errorCode, errorMessage);
      alert("failed", errorMessage);
    });
});
