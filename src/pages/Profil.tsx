import React, { useEffect, useState } from 'react';
import { IonFooter, IonCol, IonRow, IonGrid,IonAlert, IonBadge, IonButton, IonContent, IonHeader, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonListHeader, IonPage, IonRouterOutlet, IonText, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profil.css';
import firebase from '../FirebaseConfig';
import { getEmail, logOutUser} from '../FirebaseConfig';
import user from '../assets/json/user.json';
import { moon } from 'ionicons/icons';
import { Link, Route, useHistory } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import Follow from './Follow';

const Profil: React.FC = () => {

    const [showAlert, setShowAlert] = useState(false);

    const toggleDarkModeHandler = () => {
      document.body.classList.toggle("dark");
    };

    function logOutButton(){
      const email = getEmail();
      if (email){return <IonButton id="btnLogoutProfil" onClick={() => setShowAlert(true)} expand="block">
      Logout
    </IonButton>}
    }

    function logInButton(){
      const email = getEmail();
      if (!email){return <>
      <IonButton id="btnLoginProfil" href="/login">
        Login
      </IonButton>
      <IonButton id="btnCreateProfil" href="/register">
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
        <Link to='/follow'>
        <IonItem>
          <IonLabel>Followers</IonLabel>
          <IonBadge slot="end">{nbr_followers()}</IonBadge>
        </IonItem>
        <IonItem>
          <IonLabel>Following</IonLabel>
          <IonBadge slot="end">{nbr_following()}</IonBadge>
        </IonItem>
        </Link>
        </IonList></>
      }
    }


    return (
      <IonPage>
          <IonContent>
          <IonList className="ion-margin-top">
          <IonItem>
            <IonIcon slot="start" icon={moon} />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle id="toggleDarkMode"
              slot="end"
              name="darkMode"
              onIonChange={toggleDarkModeHandler}
            />
          </IonItem>
        </IonList>
        
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
      <><div key={i} id="gridProfil"><IonGrid>
                      <IonRow>
                        <IonCol size="4"><IonImg id="imgProfil" src={user.img_profil} /></IonCol>
                        <IonCol size="8">{followDisplay()}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol size="" id="nameProfil"><b>{user.username}</b> <br/> {user.age + " years"}</IonCol>
                        <IonCol size="">Favorite artist <b>{user.pref_artiste}</b></IonCol>
                      </IonRow>
                      </IonGrid>
                </div>
                <div id="editProfil">Edit profile</div>
              </>))}
              
    </IonContent>

    <IonFooter className="ion-no-border">
      <IonToolbar>{logOutButton()} </IonToolbar>
    </IonFooter>
    
    {logInButton()}
        
    </IonPage>
    );
  }

export default Profil;
