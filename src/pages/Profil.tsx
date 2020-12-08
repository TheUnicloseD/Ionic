import React, { useEffect, useState } from 'react';
import { IonAlert, IonButton, IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profil.css';
import firebase from '../FirebaseConfig';
import { getEmail, logOutUser} from '../FirebaseConfig';
import user from '../assets/json/user.json';

const Profil: React.FC = () => {

    const [showAlert, setShowAlert] = useState(false);

    const usernames = user
    const email = getEmail();
    var infoUsername: { username: string; img_profil: string; age: string; pref_artiste: string; }[] = []
    if (email == 'leo.hamon@h.com'){infoUsername = usernames['Leo_Le_Hamon']}
    if (email == 's.k@skg.fr'){infoUsername = usernames['SKG']}
    if (email == 'harden@mail.fr'){infoUsername = usernames['LebronGOAT']}
    console.log(infoUsername)
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
          <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass='my-custom-class'
          header={'Log Out ?'}
          buttons={[
            {
              text: 'No',
              role: 'cancel',
              cssClass: 'secondary',
              handler: () => {
                console.log('Confirm Cancel');
              }
            },
            {
              text: 'Yes',
              handler: () => {
                console.log('Confirm Ok');
                logOutUser();
              }
            }
          ]}
        />
          <ul>
            {email}
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
                <IonButton onClick={() => setShowAlert(true)} expand="block">
                  Logout
                </IonButton>
        </IonContent>
      </IonPage>
    );
  }

export default Profil;
