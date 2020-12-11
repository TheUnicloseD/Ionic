import React, { useState } from 'react';
import { IonAlert, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonPage, IonSearchbar, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import {getEmail, shareAlbum} from '../FirebaseConfig'
import './Search.css';
import { toast } from '../Toast';
import albums from '../assets/json/album.json';
import {share} from './Fil'
import { shareSocialOutline } from 'ionicons/icons';

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
      return <>
        <IonSearchbar placeholder="Search Album"></IonSearchbar>
        <IonButton id="btnAddAlbum" onClick={() => setShowAlert(true)} expand="block">Add Album</IonButton>
  
    <IonContent >
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
      <IonImg src={alb.cover} alt="Images cover" />
      <IonCardHeader id="cardHeaderSearch">
      <IonCardTitle>{alb.title}</IonCardTitle>
      <IonCardSubtitle>Album par {alb.artist} - {alb.date_sortie}</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <p id="iframeSearch"><iframe src={alb.spotify} width="100%" height="300" allow="encrypted-media"></iframe></p>
        <p>{alb.date_sortie}</p>
        <p>{alb.nbr_song} titres | {alb.length} min</p>
      </IonCardContent>
      
    <IonButton class="btnShare" onClick={() => share(alb.title,alb.artist,alb.date_sortie,alb.length,alb.nbr_song,alb.cover,alb.spotify)}> 
    <IonIcon icon={shareSocialOutline} /> Share  </IonButton>
      </IonCard> </>))}
    
    </IonContent> </>
    }
    else{
      return <>
      <IonButton id="btnLoginSearch" href="/login">Login</IonButton>
      <div id="textLoggedIn"> You must be logged in to access this page.</div></>
    }
  }
  

  return (

    

    <IonPage>
      {isLogIn()}
    </IonPage>
  );
};

export default Search;
