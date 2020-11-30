import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {shareAlbum} from '../FirebaseConfig'
import './Search.css';
import { toast } from '../Toast';

const Search: React.FC = () => {

  const [busy, setBusy] = useState<boolean>(false)

  async function share(value: string) {
      setBusy(true)
      const res = await shareAlbum(value)
      toast('Album Shared')
      setBusy(false)
  }

  return (

    

    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Search</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
      <IonCard>
      <img src="https://images-na.ssl-images-amazon.com/images/I/61dVdX2bgIL._SL1000_.jpg" />
          <IonCardHeader>
            <IonCardSubtitle>Rodeo</IonCardSubtitle>
            <IonCardTitle>Travis Scott</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Gros album sa mère
      </IonCardContent>
      <IonButton onClick={() => share('Rodeo')}> Partager </IonButton>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Search;
