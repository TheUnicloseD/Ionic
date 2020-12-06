import { IonContent, IonLoading, IonHeader, IonPage,IonButton, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonItem, IonInput, IonBadge, IonRouterOutlet, IonRow, IonCol } from '@ionic/react';
import React, { useState } from 'react';
import { book, search, person,personCircle } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import {loginUser} from '../FirebaseConfig';
import {toast} from '../Toast';
import './Login.css';



const Login: React.FC = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState<boolean>(false)

  async function login() {
      setBusy(true)
      const res = await loginUser(username, password)
      if(!res) {
          toast('Error logging with your credentials')
      } else {
          toast('You have logged in')
      }
      setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonLoading message="Please Wait..." duration={0} isOpen={busy}/>
      <IonRow>
        <IonCol>
          <IonTitle size="large" id="titreInstaLogin">InstaSound</IonTitle>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonInput placeholder="Email ou nom d'utilisateur"
                type="text"
                value={username}
                onIonChange={(e:any) => setUsername(e.target.value)}
              >
              </IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
              <IonInput placeholder="Mot de passe"
                type="password"
                value={password}
                onIonChange={(e:any) => setPassword(e.target.value)}
              >
              </IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
      <IonCol>
          <IonButton onClick={login} expand="block">
            Login
          </IonButton>
        <p style={{ fontSize: "medium" }}>
        Don't have an account? <a href="/register">Sign up!</a>
        </p>
        </IonCol>
      </IonRow>
    </IonPage>
  );
};

export default Login;
