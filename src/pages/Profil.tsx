import React, { useEffect, useState } from 'react';
import { IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profil.css';
import firebase from '../FirebaseConfig';
import { getUserName} from '../FirebaseConfig';
import user from '../assets/json/user.json';

const Profil: React.FC = () => {
    const usernames = user
    const userName = getUserName();
    var infoUsername: { username: string; img_profil: string; age: string; pref_artiste: string; }[] = []
    if (userName == 'Leo_Le_Hamon'){infoUsername = usernames['Leo_Le_Hamon']}
    if (userName == 'SKG'){infoUsername = usernames['SKG']}
    if (userName == 'LebronGOAT'){infoUsername = usernames['LebronGOAT']}
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Profil</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Profil</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ul>
            {userName}
          </ul>
            {infoUsername.map((user,i) => (
      <><p>{user.username}</p><p>{user.age}</p><p>{user.pref_artiste}</p>
                <img src={user.img_profil} />
              </>))}
              <IonButton href="/login">
                  Login
                </IonButton>
                <IonButton href="/register">
                  Create an account
                </IonButton>
        </IonContent>
      </IonPage>
    );
  }

export default Profil;
