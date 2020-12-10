import React, { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonInput, IonButton, IonText, IonGrid, IonRow, IonCol, IonSearchbar, IonButtons, IonBackButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Follow.css';
import AddItem from '../AddItem';
import ItemList from '../ItemList';
import { toast } from '../Toast';
import posts from '../assets/json/posts.json';
import { getEmail } from '../FirebaseConfig';
import user from '../assets/json/user.json';



const Follow: React.FC = () => {

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
        return <><ul>{followers[0].map((user,i) => (
          <><li key={i}>{user}</li></>
        ))}</ul></>}}

function displayFollowing(){ 
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
              const following = infoUsername.map((user,i) => user.following)
              console.log(following[0])
              return <><ul>{following[0].map((user,i) => (
                <><li key={i}>{user}</li></>
              ))}</ul></>}}
    return (<IonPage>
      <IonButtons slot="start">
          <IonBackButton defaultHref='/profil'/>  
        </IonButtons>
      <IonSearchbar placeholder="Search User"></IonSearchbar>
        <IonContent>
    <IonGrid>
      <IonRow>
        <IonCol>
          <IonTitle>Followers</IonTitle>
            {displayFollowers()}
        </IonCol>
        <IonCol>
          <IonTitle>Following</IonTitle>
            {displayFollowing()}
        </IonCol>
      </IonRow>
    </IonGrid>
    </IonContent>
    </IonPage>

    );
};

export default Follow;