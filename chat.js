// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDWTVk1vacCOC9Dye8bgN-KPd31JghsNfE",
    authDomain: "let-s-chat-chat-app-c91f2.firebaseapp.com",
    projectId: "let-s-chat-chat-app-c91f2",
    storageBucket: "let-s-chat-chat-app-c91f2.appspot.com",
    messagingSenderId: "204951674297",
    appId: "1:204951674297:web:1b5d08a29f9b2d6432ea68",
    measurementId: "G-WV41MXDFRP"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    console.log("working");
    
    
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}



