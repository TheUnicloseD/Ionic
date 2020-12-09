import React, { useState } from 'react';
import { IonAlert, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {getEmail, shareAlbum} from '../FirebaseConfig'
import './Search.css';
import { toast } from '../Toast';
import albums from '../assets/json/album.json';
import {share} from './Fil'

const Search: React.FC = () => {

  var JsonAlbums = albums
  console.log(JsonAlbums)
  const [busy, setBusy] = useState<boolean>(false)
  const username = getEmail()

  const [showAlert, setShowAlert] = useState(false);

  function addAlbum(data: { title: any; artist: any; date_sortie: any; length: any; nbr_song: any; cover: any; spotify: any; }){
    JsonAlbums['album'].unshift({title: data.title, artist:data.artist, date_sortie:data.date_sortie, 
                    length: data.length, nbr_song: data.nbr_song, cover: data.cover, spotify: data.spotify});
    console.log(JsonAlbums)
  }

  function isLogIn(){
    const email = getEmail();
    if (email){
      return <><IonHeader>
      <IonToolbar>
        <IonTitle>Search</IonTitle>
        <IonButton onClick={() => setShowAlert(true)} expand="block">Add Album</IonButton>
      </IonToolbar>
    </IonHeader>
    <IonContent fullscreen>
    <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        cssClass='my-custom-class'
        header={'Add Album'}
        inputs={[
          {
            name: 'title',
            type: 'text',
            placeholder: 'Title'
          },
          {
            name: 'artist',
            type: 'text',
            placeholder: 'Artist'
          },
          {
            name: 'date_sortie',
            type: 'text',
            placeholder: 'Date'
          },
          // input date with min & max
          {
            name: 'length',
            type: 'text',
            placeholder: 'Length'
          },
          // input date without min nor max
          {
            name: 'nbr_song',
            type: 'text',
            placeholder: 'Number Of Songs'
          },
          {
            name: 'cover',
            type: 'text',
            placeholder: 'Cover'
          },
          {
            name: 'spotify',
            type: 'text',
            placeholder: "Spotify Link"
          },
        ]}
        buttons={[
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          },
          {
            text: 'Ok',
            handler: data => {
              console.log('Confirm Ok');
              addAlbum(data);
            }
          }
        ]}
      />
    {JsonAlbums.album.map((alb,i) => (
    <><IonCard>
    <IonImg src={alb.cover} alt="dfdfd" />
        <IonCardHeader>
          <IonCardSubtitle>{alb.title}</IonCardSubtitle>
          <IonCardTitle>{alb.artist}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          {alb.length}{alb.nbr_song}{alb.date_sortie}
          <p><iframe src={alb.spotify} width="300" height="380" allow="encrypted-media"></iframe></p>
    </IonCardContent>
    <IonButton onClick={() => share(alb.title,alb.artist,alb.date_sortie,alb.length,alb.nbr_song,alb.cover,alb.spotify)}> Partager </IonButton>
      </IonCard> </>))}
    
    </IonContent> </>
    }
    else{
      return <><IonText> You need to log in to acess to this page !</IonText>
      <IonButton href="/login">LOGIN</IonButton></>
    }
  }
  

  return (

    

    <IonPage>
      {isLogIn()}
    </IonPage>
  );
};

export default Search;
