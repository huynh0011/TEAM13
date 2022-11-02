// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.5.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  //Điền thông tin Firebase config của cá nhân vào đây
  apiKey: "AIzaSyAGF5preSv4nn1pkCyCyMhzlldP27PQZ-c",
  authDomain: "nhuhuynhteam13.firebaseapp.com",
  databaseURL: "https://nhuhuynhteam13-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "nhuhuynhteam13",
  storageBucket: "nhuhuynhteam13.appspot.com",
  messagingSenderId: "465918230032",
  appId: "1:465918230032:web:b4777d8075b21a0fab9495",
  measurementId: "G-ESCK46HHCE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

send.addEventListener('click',(e) =>{ 
Sends();
});
read.addEventListener('click',(e) =>{ 
Getval();
});

function Sends(){
    Number = parseFloat(document.getElementById('Number').value);
const db = getDatabase();
  set(ref(db, 'Number/'), {
    Value : Number
  });
}

function Getval(){
    const dbRef = ref(getDatabase());
    get(child(dbRef, `Number` + '/Value')).then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
        document.getElementById('val').innerHTML = "Number/Value="+snapshot.val();
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
}
