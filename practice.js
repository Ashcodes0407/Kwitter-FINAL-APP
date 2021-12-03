
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAxFPVjlYzqT2CNx2bDXOB3ssiuksYJYMQ",
    authDomain: "kwitter-cbcd5.firebaseapp.com",
    databaseURL: "https://kwitter-cbcd5-default-rtdb.firebaseio.com",
    projectId: "kwitter-cbcd5",
    storageBucket: "kwitter-cbcd5.appspot.com",
    messagingSenderId: "19029784811",
    appId: "1:19029784811:web:5db87d806b38ce381666ae",
    measurementId: "G-NXSPQ61T9C"
  };
  
  // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"adding user"
    });
}