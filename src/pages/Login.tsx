import { IonContent, IonLoading, IonHeader, IonPage,IonButton, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonItem, IonInput, IonBadge, IonRouterOutlet, IonRow, IonCol, IonList } from '@ionic/react';
import React, { useState } from 'react';
import { book, search, person,personCircle } from 'ionicons/icons';
import ExploreContainer from '../components/ExploreContainer';
import {loginUser} from '../FirebaseConfig';
import {toast} from '../Toast';
import './Login.css';
import { useHistory } from 'react-router-dom';



const Login: React.FC = () => {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [busy, setBusy] = useState<boolean>(false)
  const history = useHistory();

  async function login() {
      setBusy(true)
      const res = await loginUser(username, password)
      if(!res) {
          toast('Error logging with your credentials')
      } else {
          toast('You have logged in')
          history.push("/profil");
      }
      setBusy(false)
  }

  return (
    <IonPage>
      <IonHeader>
      </IonHeader>
      <IonLoading message="Please Wait..." duration={0} isOpen={busy}/>
      <IonContent id="contentLogin">
      <IonList>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonTitle size="large" class="titreInstaLogin">InstaSound</IonTitle>
          </IonItem>
        </IonCol>
      </IonRow>
        
     
      <IonRow>
        <IonCol>
            <IonInput class="input1" placeholder="Email"
                type="text"
                value={username}
                onIonChange={(e:any) => setUsername(e.target.value)}
              >
              </IonInput>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
              <IonInput class="inputSous" placeholder="Password"
                type="password"
                value={password}
                onIonChange={(e:any) => setPassword(e.target.value)}
              >
              </IonInput>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
          <IonButton id="btnLogin" onClick={login} expand="block">
            Login
          </IonButton>
          <p id="pForgotLogin" style={{ fontSize: "small" }}>
          Forgot your login details? <a href=""> Get help signing in.</a>
          </p>
          <p id="pSignup" style={{ fontSize: "medium" }}>
            Don't have an account? <a href="/register">Sign up.</a>
          </p>
        </IonCol>
      </IonRow>

      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Login;
