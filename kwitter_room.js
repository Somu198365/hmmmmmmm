
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBTksxmKgFNP1zJsZ9Aiz8wxyrE5A3IUGM",
      authDomain: "kwitter-4e2b2.firebaseapp.com",
      databaseURL: "https://kwitter-4e2b2-default-rtdb.firebaseio.com",
      projectId: "kwitter-4e2b2",
      storageBucket: "kwitter-4e2b2.appspot.com",
      messagingSenderId: "62610987390",
      appId: "1:62610987390:web:fbac389036c0f7a4c07b2f"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       
      //Start code
      
      //End code
      });});}
getData();
function log_out(){
      
      window.location="log_out.html";
}