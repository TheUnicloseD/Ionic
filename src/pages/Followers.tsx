import React, { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonInput, IonButton, IonText, IonGrid, IonRow, IonCol, IonSearchbar, IonButtons, IonBackButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Followers.css';
import { toast } from '../Toast';
import posts from '../assets/json/posts.json';
import { getEmail } from '../FirebaseConfig';
import user from '../assets/json/user.json';
import { Link } from 'react-router-dom';



const Followers: React.FC = () => {

function displayFollowers(){
    const usernames = user
    const email = getEmail();
    console.log(email)
    setTimeout(function(){},5000)
    console.log(email)
    if (email){
        var infoUsername: { username: string; img_profil: string; age: string; pref_artiste: string; following: string[], followers: string[] }[] = []
        if (email == 'leo.hamon@h.com'){infoUsername = usernames['Leo_Le_Hamon']}
        if (email == 's.k@skg.fr'){infoUsername = usernames['SKG']}
        if (email == 'harden@mail.fr'){infoUsername = usernames['LebronGOAT']}
        const followers = infoUsername.map((user,i) => user.followers)
        return <><ul id="listFollowers">{followers[0].map((user,i) => (
          <><Link to="/user"><li key={i} id="spacebtwFollowers">{user}</li></Link></>
        ))}</ul></>}}

    return (<IonPage>
      <IonButtons slot="start">
          <IonBackButton defaultHref='/profil'/> 
        </IonButtons>
      <IonSearchbar placeholder="Search users..."></IonSearchbar>
        <IonContent>
              
          <IonTitle id="titleFollowers">All Followers</IonTitle>
            {displayFollowers()}     
    
    </IonContent>
    </IonPage>

    );
};

export default Followers;