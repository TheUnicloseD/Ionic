import React from 'react';
import { IonContent, IonHeader, IonInput, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Profil.css';
import { getUserName, getAllUser} from '../FirebaseConfig';

const Profil: React.FC = () => {

  const userName = getUserName();
  const listUsername = getAllUser();
  console.log(listUsername);

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
        {userName}
      </IonContent>
    </IonPage>
  );
};

export default Profil;
