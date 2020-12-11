import { IonContent, IonHeader, IonPage,IonButton, IonList, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonItem, IonInput, IonBadge, IonRouterOutlet, IonRow, IonCol, IonLoading  } from '@ionic/react';
import React, { useState } from 'react';
import { book, search, person,personCircle } from 'ionicons/icons';
import { Link } from 'react-router-dom';
import ExploreContainer from '../components/ExploreContainer';
import {toast} from '../Toast'; 
import {registerUser} from '../FirebaseConfig';
import './Register.css';



const Register: React.FC = () => {

  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [cpassword, setCPassword] = useState('')
  const [busy, setBusy] = useState<boolean>(false)  

  async function RegisterUser() {
      setBusy(true)
      if(password !== cpassword) {
          return toast('Password do not match')
      }
      if(username.trim() === '' || password.trim() === ''){
          return toast('Username and password are required')
        }
      const res = await registerUser(email, username, password)
      if (res) {
          return toast('You have registered successfully!')
      }
      setBusy(false)

    
    

    }

  return (
    <IonPage>
      <IonHeader>
        <IonLoading message="Registration in progress..." duration={0} isOpen={busy}/>
      </IonHeader>
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
              <IonInput class="input1" placeholder="Username"
                type="text"
                value={username}
                onIonChange={(e:any) => setUsername(e.target.value)}
              >
              </IonInput>
        </IonCol>
      </IonRow>

      <IonRow>
        <IonCol>
              <IonInput class="inputSous" placeholder="Email"
                type="text"
                value={email}
                onIonChange={(e:any) => setEmail(e.target.value)}
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
              <IonInput class="inputSous" placeholder="Confirm password"
                type="password"
                value={cpassword}
                onIonChange={(e:any) => setCPassword(e.target.value)}
              >
              </IonInput>
        </IonCol>
      </IonRow>

      <IonRow>
      <IonCol>
          <IonButton onClick={RegisterUser} expand="block">
            Register
          </IonButton>
        </IonCol>
      </IonRow>

      <p id="pSignup" style={{ fontSize: "medium" }}> 
          Already have an account? <Link to="/login"> Login </Link>
      </p>
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Register;
