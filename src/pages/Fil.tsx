import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Fil.css';
import AddItem from '../AddItem';
import ItemList from '../ItemList';
import posts from '../assets/json/posts.json';
import { getUserName} from '../FirebaseConfig';

const Fil: React.FC = () => {

  const JsonPosts = posts;
  const userName = getUserName();

  
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {JsonPosts.posts.map((post,i) => (
      <><IonCard>
          <IonCardHeader>
            <IonCardSubtitle>{post.date}{post.heure}</IonCardSubtitle>
            <IonCardTitle>{post.username}</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
          {post.album.map((alb,i) => (
              <><div>{alb.title}</div>
              <img src={alb.cover} /></>
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
