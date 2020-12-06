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
          <ul>
      {usernames.user.map((user) => (
        <><li>{user.username}</li> <img src={user.img_profil}/> <IonButton>Follow</IonButton></>
      ))}
    </ul>
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
