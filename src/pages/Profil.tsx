import React, { useEffect, useState } from 'react';
import { IonAlert, IonBadge, IonButton, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profil.css';
import firebase from '../FirebaseConfig';
import { getEmail, logOutUser} from '../FirebaseConfig';
import user from '../assets/json/user.json';
import { moon } from 'ionicons/icons';
import { Link, useHistory } from 'react-router-dom';

const Profil: React.FC = () => {

    const history = useHistory;
    const [showAlert, setShowAlert] = useState(false);

    const toggleDarkModeHandler = () => {
      document.body.classList.toggle("dark");
    };

    function logOutButton(){
      const email = getEmail();
      if (email){return <IonButton onClick={() => setShowAlert(true)} expand="block">
      Logout
    </IonButton>}
    }

    function logInButton(){
      const email = getEmail();
      if (!email){return <><IonButton href="/login">
        Login
      </IonButton>
        <IonButton href="/register">
          Create an account
        </IonButton></>}
    }

    const usernames = user
    const email = getEmail();
    var infoUsername: { username: string; img_profil: string; age: string; pref_artiste: string; following: string[], followers: string[] }[] = []
    if (email == 'leo.hamon@h.com'){infoUsername = usernames['Leo_Le_Hamon']}
    if (email == 's.k@skg.fr'){infoUsername = usernames['SKG']}
    if (email == 'harden@mail.fr'){infoUsername = usernames['LebronGOAT']}
    const following = infoUsername.map((user,i) => user.following)
    const followers = infoUsername.map((user,i) => user.followers)
    function nbr_following(){if (email){return following[0].length}}
    function nbr_followers(){if (email){return followers[0].length}}

    function followDisplay(){
      const email = getEmail();
      if(email){
        return <><IonList>
        <IonItem>
          <IonLabel>Followers</IonLabel>
          <IonBadge slot="end">{nbr_followers()}</IonBadge>
        </IonItem>
        <IonItem>
          <IonLabel>Following</IonLabel>
          <IonBadge slot="end">{nbr_following()}</IonBadge>
        </IonItem>
        </IonList></>
      }
    }


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
          <IonList className="ion-margin-top">
          <IonItem>
            <IonIcon slot="start" icon={moon} />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle
              slot="end"
              name="darkMode"
              onIonChange={toggleDarkModeHandler}
            />
          </IonItem>
        </IonList>
        {followDisplay()}
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
            {infoUsername.map((user,i) => (
      <><p>{user.username}</p><p>{user.age}</p><p>{user.pref_artiste}</p>
                <IonImg src={user.img_profil} />
              </>))}
                {logInButton()}
                {logOutButton()}
        </IonContent>
      </IonPage>
    );
  }

export default Profil;
