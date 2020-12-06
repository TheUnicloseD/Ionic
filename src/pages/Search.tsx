import React, { useState } from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {shareAlbum} from '../FirebaseConfig'
import './Search.css';
import { toast } from '../Toast';
import albums from '../assets/json/album.json';

const Search: React.FC = () => {

  const JsonAlbums = albums
  console.log(JsonAlbums)
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
      {JsonAlbums.album.map((alb,i) => (
      <><IonCard>
      <IonImg src={alb.cover}/>
          <IonCardHeader>
            <IonCardSubtitle>{alb.title}</IonCardSubtitle>
            <IonCardTitle>{alb.artist}</IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            {alb.length}{alb.nbr_song}{alb.date_sortie}
            <p><iframe src={alb.spotify} width="300" height="380" allow="encrypted-media"></iframe></p>
      </IonCardContent>
      <IonButton onClick={() => share('{alb.title}')}> Partager </IonButton>
        </IonCard> </>))}
      
      </IonContent>
    </IonPage>
  );
};

export default Search;
