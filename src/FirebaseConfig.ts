/* Firebase imports */
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { useDocument } from 'react-firebase-hooks/firestore';
import {toast} from './Toast';

//Mettre dans un fichier séparé et dans le gitignore
var firebaseConfig = {
  apiKey: "AIzaSyDGmggnzRETkiE0Nq6ECOlApREsrsL8Hj4",
  authDomain: "instasound-d215c.firebaseapp.com",
  databaseURL: "https://instasound-d215c.firebaseio.com",
  projectId: "instasound-d215c",
  storageBucket: "instasound-d215c.appspot.com",
  messagingSenderId: "206853779770",
  appId: "1:206853779770:web:7880729018ea84c7a36003",
  measurementId: "G-F60T0EN8LM"
};

firebase.initializeApp(firebaseConfig);

export async function loginUser(username: string, password:string) {
    try{
        const res = await firebase.auth().signInWithEmailAndPassword(username, password)
        console.log(res)
        return true
    } catch (error) {
        toast(error.message,4000)
        return false
    }
    
}

export async function registerUser(email:string, username:string, password:string){
    try {
        const user = firebase.auth().currentUser;
        const res = await firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
            if (user) {
                saveUser(email,username,user.uid)
                return user.updateProfile({
              displayName: username
            })}
        console.log(res);
    })} catch(error) {
        toast(error.message,4000)
        return false
    }
}

async function saveUser(email: string,username: string,uid: string){
    console.log("email ou pas email");
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("UserData/"+uid+"/username").set(username);
    firebaseRef.child("UserData/"+uid+"/email").set(email);
}

export async function getAllUser(){
    let listUsername: Array<string> = [];
    var firebaseRef = firebase.database().ref("UserData");
    await firebaseRef.once("value") 
    .then(function(snapshot) { 
    snapshot.forEach(function(childSnapshot) { 
     var key = childSnapshot.key;   
     var username = childSnapshot.val().username; 
     listUsername.push(username)
    }); 
})
console.log(listUsername);
return listUsername;
};

export async function shareAlbum(initialValue: string) {
    var firebaseRef = firebase.database().ref();
    var user = firebase.auth().currentUser;
    console.log(user)

    if (user) {
        firebaseRef.child("Album").set(user.email)
    } 
    
    };

export function getUserName(){
    var user = firebase.auth().currentUser;
    if (user) {
        return user.displayName;
    }
}
