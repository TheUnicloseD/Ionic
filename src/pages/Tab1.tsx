import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import AddItem from '../AddItem';
import ItemList from '../ItemList';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        {}
        <IonCard>
          <IonCardHeader>
          <h3>Group list of tasks:</h3>
          </IonCardHeader>
          <IonCardContent>
          </IonCardContent>
          {}
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
