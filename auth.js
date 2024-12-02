
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

  // require('dotenv').config();
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
  import { getDatabase } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
  import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
  // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
  const firebaseConfig = {
      apiKey: "AIzaSyCWHrdEBcTp-dqPylPfBjP3qYnY66KKZgE",
      authDomain: "ajia-african-travels.firebaseapp.com",
      projectId: "ajia-african-travels",
      storageBucket: "ajia-african-travels.appspot.com",
      messagingSenderId: "435073069133",
      appId: "1:435073069133:web:1feecd7f7933e634f6ac04",
      measurementId: "G-J0K2D6L6T5"
    };
  
  
  const app = initializeApp(firebaseConfig);
  const database = getDatabase(app);
  const auth = getAuth();
  
  const main = document.getElementById("main");
  const returnBtn = document.getElementById("return-btn");
  
  
  
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const submitButton = document.getElementById("submit");
  
  
  const signupEmailIn = document.getElementById("email-signup");
  const confirmSignupEmailIn = document.getElementById("confirm-email-signup");
  const signupPasswordIn = document.getElementById("password-signup");
  const confirmSignUpPasswordIn = document.getElementById(
      "confirm-password-signup"
  );
  const createacct = document.getElementById("create-acct");
  
  // Start with this
  const createacctbtn = document.getElementById("create-acct-btn");
  const signupButton = document.getElementById("sign-up");
  
  var email,
    password,
    signupEmail,
    signupPassword,
    confirmSignupEmail,
    confirmSignUpPassword;
  
  createacctbtn.addEventListener("click", function () {
    var isVerified = true;
  
    signupEmail = signupEmailIn.value;
    confirmSignupEmail = confirmSignupEmailIn.value;
    if (signupEmail != confirmSignupEmail) {
      window.alert("Email fields do not match. Try again.");
      isVerified = false;
    }
  
    signupPassword = signupPasswordIn.value;
    confirmSignUpPassword = confirmSignUpPasswordIn.value;
    if (signupPassword != confirmSignUpPassword) {
      window.alert("Password fields do not match. Try again.");
      isVerified = false;
    }
  
    if (
      signupEmail == null ||
      confirmSignupEmail == null ||
      signupPassword == null ||
      confirmSignUpPassword == null
    ) {
      window.alert("Please fill out all required fields.");
      isVerified = false;
    }
  
    if (isVerified) {
      createUserWithEmailAndPassword(auth, signupEmail, signupPassword)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          window.alert("Success! Account created.");
          window.location = "./destinations/destinations.html";
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          window.alert("Error occurred. Try again.");
          window.alert(errorMessage);
        });
    }
  });
  
  submitButton.addEventListener("click", function () {
    email = emailInput.value;
    console.log(email);
    password = passwordInput.value;
    console.log(password);
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
  
        window.alert("Success! Welcome back!");
        window.location = "./destinations/destinations.html";
  
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        window.alert("Error occurred. Try again.");
      });
  });
  
  // Navigate through the login / Register components
  
  signupButton.addEventListener("click", () => {
    main.style.display = "none";
    createacct.style.display = "block";
  });
  
  returnBtn.addEventListener("click", function () {
    main.style.display = "block";
    createacct.style.display = "none";
  });
  