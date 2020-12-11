/* Firebase imports */
import React from 'react'; 
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import { useDocument } from 'react-firebase-hooks/firestore';
import {toast} from './Toast';
import { useHistory } from 'react-router';

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

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }

export async function loginUser(username: string, password:string) {
    try{
        const auth = firebase.auth()
        const res = await auth.signInWithEmailAndPassword(username, password)
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
    })} catch(error) {
        //toast(error.message,4000)
        return false
    }
}

async function saveUser(email: string,username: string,uid: string){
    console.log("email ou pas email");
    var firebaseRef = firebase.database().ref();
    firebaseRef.child("UserData/"+uid+"/username").set(username);
    firebaseRef.child("UserData/"+uid+"/email").set(email);
}

export async function logOutUser(){
    const auth = firebase.auth();
    auth.signOut().then(() => {
        console.log('user signed out');
    });
}

/*export function getAllUser(this: string[]){
    //var listUsername: Array<string> = [];
    var self = this
    var firebaseRef = firebase.database().ref("UserData");
    //console.log(listUsername)
    firebaseRef.once("value") 
    .then(function(snapshot) { 
    snapshot.forEach(
    function(childSnapshot) { 
     //console.log(listUsername);
     var key = childSnapshot.key;   
     var username = childSnapshot.val().username; 
     self.push(username);
     console.log(self)
    });
    
})   ;
return self;
};

export function getAllUser(){
var ref = firebase.database().ref("UserData");
ref.on("child_added", function(childSnapshot) {
  var listUsername: Array<string> = []
  var username = childSnapshot.val().username;
  listUsername.push(username);
});
console.log(listUsername)}
*/

export async function shareAlbum(initialValue: string) {
    var firebaseRef = firebase.database().ref();
    var user = firebase.auth().currentUser;
    console.log(user)

    if (user) {
        firebaseRef.child("Album").set(user.email)
    } 
    
    };

export function getEmail(){
    var user = firebase.auth().currentUser;
    if (user) {
        return user.email;
    }
}

export default firebase;
