import React, { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonInput, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Fil.css';
import AddItem from '../AddItem';
import ItemList from '../ItemList';
import { toast } from '../Toast';
import posts from '../assets/json/posts.json';
import { cpuUsage } from 'process';
import { getEmail } from '../FirebaseConfig';

function setUsername(){
  const email = getEmail();
  console.log(email)
  var username: string;
  if (email == 'leo.hamon@h.com'){username = 'Leo_Le_Hamon'}
  else if (email == 's.k@skg.fr'){username = 'SKG'
console.log("ici"); console.log(username)}
  else if (email == 'harden@mail.fr'){username = 'LebronGOAT'}
  else {username = "aucun"}
  console.log(username)
return username}

var JsonPosts = posts;


export function share(title: string,artist: string,date_sortie: string, length: string, nbr_song: string,
  cover: string, spotify: string){
  const username = setUsername();
  let date = Date();
  let dateLoc = date.toLocaleString()
  JsonPosts["posts"].push({id: (Math.random()*1000).toString(),username: username, date: dateLoc, album: [
        {   
            title: title,
            artist: artist,
            date_sortie: date_sortie,
            length: length,
            nbr_song: nbr_song,
            cover: cover,
            spotify: spotify
        }
    ],
    comments: []
})
  //setBusy(true)
  toast('Album Shared')
  //setBusy(false)
  console.log(JsonPosts)
}

function saveComment(id: number){
  let date = Date();
  let dateLoc = date.toLocaleString()
  const username = setUsername();
  var idd = "comment"+id;
  console.log(idd)
  var saisie = (document.getElementById("comment"+id) as HTMLInputElement).value;
  console.log(saisie)
  if(saisie){
  JsonPosts["posts"][id]["comments"].push({date: dateLoc,username: username ,message: saisie})
}}
const Fil: React.FC = () => {

  const [busy, setBusy] = useState<boolean>(false)

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" id="titreInsta">InstaSound</IonTitle>
          </IonToolbar>
        </IonHeader>
        {JsonPosts.posts.map((post,i) => (
      <><IonCard>
          <IonCardHeader>
            <IonCardSubtitle>{post.username}</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
          {post.album.map((alb,i) => (
              <><div id="truc">{alb.title}</div>
              <IonImg src={alb.cover} alt="dfdfd" /></>
            ))}
          <IonInput id={"comment"+i} type="text" placeholder="Make a comment"></IonInput>
          <IonButton onClick={() => saveComment(i)}>Send Comment</IonButton>
          {post.comments.map((comment,i) => (
            <><p>{comment.date} </p><p>{comment.username}: {comment.message}</p></>
          ))}
            </IonCardContent>
        </IonCard> </>))}
      </IonContent>
    </IonPage>
  );
};

export default Fil;
