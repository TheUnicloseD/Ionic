import React, { useState } from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonInput, IonButton, IonText, IonIcon, IonItem, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Fil.css';
import { toast } from '../Toast';
import posts from '../assets/json/posts.json';
import { cpuUsage } from 'process';
import { getEmail } from '../FirebaseConfig';
import { chatboxOutline, chatbubbleOutline, heartCircle, heartOutline, personCircle } from 'ionicons/icons';
import { Link } from 'react-router-dom';

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
  JsonPosts["posts"].unshift({id: (Math.random()*1000).toString(),username: username, date: dateLoc, album: [
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
  JsonPosts["posts"][id]["comments"].unshift({date: dateLoc,username: username ,message: saisie});
  (document.getElementById("comment"+id) as HTMLInputElement).value = "";
}}

function isLogIn(){
  const email = getEmail();
  if (email){
    return <>{JsonPosts.posts.map((post,i) => (
      <><IonCard>
          <IonCardHeader id="cardHeaderFil">
          <IonItem>
          <IonIcon size="large" icon={personCircle} /> 
          <IonLabel>{post.username}</IonLabel>
          </IonItem>
          </IonCardHeader>
          
          <IonCardContent>
          {post.album.map((alb,i) => (
              <>
              <IonImg src={alb.cover} alt="dfdfd" />
              <IonIcon size="large" icon={heartOutline} /> <IonIcon size="large" icon={chatboxOutline} />
              <div id="titreAlbum">{alb.title}</div></>
            ))}
          <a id="viewAllCom" href="/">View all comments</a>
          {post.comments.map((comment,i) => (
            <><p><b>{comment.username + " "} </b> {" " + comment.message}</p></>
          ))}
          
          <div id="addCommentInline">
          
          <IonInput id={"comment"+i} type="text" placeholder="Add a comment..."></IonInput>
          
          <Link to="/fil"><IonButton id="btnSendComment" onClick={() => saveComment(i)}>Post</IonButton></Link>
          </div>
          <br/>
          {post.date}
          
            </IonCardContent>
        </IonCard> </>))} </>
  }
  else{
    return <>
      <IonButton id="btnLoginFil" href="/login">Login</IonButton><br/>
      <div id="textLoggedIn"> You must be logged in to access this page.</div></>
  }
}

const Fil: React.FC = () => {

  const [busy, setBusy] = useState<boolean>(false)

  return (
    <IonPage>
      <IonContent>
      <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large" id="titreInsta">InstaSound</IonTitle>
          </IonToolbar>
        </IonHeader>
        {isLogIn()}
      </IonContent>
    </IonPage>
  );
};

export default Fil;
