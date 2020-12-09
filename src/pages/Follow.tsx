import React, { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonInput, IonButton, IonText, IonGrid, IonRow, IonCol } from '@ionic/react';
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
        const following = infoUsername.map((user,i) => user.following)
        const followers = infoUsername.map((user,i) => user.followers)
        return <p>coucou</p>}}
    return (
        <IonContent>
    <IonGrid>
      <IonRow>
        <IonCol>{displayFollowers()}</IonCol>
        <IonCol>ion-col</IonCol>
      </IonRow>
    </IonGrid>
    </IonContent>

    );
};

export default Follow;