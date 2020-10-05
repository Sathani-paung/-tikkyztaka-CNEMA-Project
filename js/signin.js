$(function(){
    
  var firebaseConfig = {
    apiKey: "AIzaSyD3CA8uNNLYKTiLda76DJyi0qXBWIJpljw",
    authDomain: "cnema-c284d.firebaseapp.com",
    databaseURL: "https://cnema-c284d.firebaseio.com",
    projectId: "cnema-c284d",
    storageBucket: "cnema-c284d.appspot.com",
    messagingSenderId: "677283409519",
    appId: "1:677283409519:web:7778c3d67f4ac1bfb8279a",
    measurementId: "G-E9RPXMD7HD"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
     var email = user.email;
     console.log(`User with email ${email} signed in`);
     window.location.href = "index2.html";    
    }
  });


  $("#signinemail").click(function(){
      var email = $("#email").val();
      var password = $("#password").val();
console.log(email,password)  
firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
    $("#errormessage").text(errorMessage)
    
  });
});
$("#signingoogle").click(function(){
  var provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().getRedirectResult().then(function(result) {
    if (result.credential) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // ...
    }
    // The signed-in user info.
    var user = result.user;
  }).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
});
});