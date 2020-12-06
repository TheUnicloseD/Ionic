import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Fil.css';
import AddItem from '../AddItem';
import ItemList from '../ItemList';
import posts from '../assets/json/posts.json';
import { getUserName} from '../FirebaseConfig';
import { cpuUsage } from 'process';

const Fil: React.FC = () => {

  const JsonPosts = posts;
  const userName = getUserName();

  
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
              <><div>{alb.title}</div>
              <IonImg src={alb.cover} alt="dfdfd" /></>
            ))}
          {post.comments.map((comment,i) => (
            <><p>{comment.date} {comment.heure} </p><p>{comment.username}: {comment.message}</p></>
          ))}
            </IonCardContent>
        </IonCard> </>))}
      </IonContent>
    </IonPage>
  );
};

export default Fil;
