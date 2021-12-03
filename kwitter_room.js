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
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name"); document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;

       console,log("Room Name - "+ Room_names);
       row="<div class='room_name' id="+Room_names+" onclick ='redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+= row;
      });});}
getData();

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
      purpose:"adding room name"
      });

      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";     
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}

function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html";
}

