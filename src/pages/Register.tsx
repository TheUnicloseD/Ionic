import { IonContent, IonHeader, IonPage,IonButton, IonTitle, IonToolbar, IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, IonItem, IonInput, IonBadge, IonRouterOutlet, IonRow, IonCol, IonLoading  } from '@ionic/react';
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
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
        <IonLoading message="Registration in progress..." duration={0} isOpen={busy}/>
      </IonHeader>
      <IonRow>
        <IonCol>
          <IonIcon
            style={{ fontSize: "70px", color: "#0040ff" }}
            icon={personCircle}
          />
          </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating"> Username </IonLabel>
              <IonInput
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
            <IonLabel position="floating"> Email </IonLabel>
              <IonInput
                type="text"
                value={email}
                onIonChange={(e:any) => setEmail(e.target.value)}
              >
              </IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonItem>
            <IonLabel position="floating"> Password </IonLabel>
              <IonInput
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
          <IonItem>
            <IonLabel position="floating"> Confirm Password </IonLabel>
              <IonInput
                type="password"
                value={cpassword}
                onIonChange={(e:any) => setCPassword(e.target.value)}
              >
              </IonInput>
          </IonItem>
        </IonCol>
      </IonRow>
      <IonRow>
      <IonCol>
          <IonButton onClick={RegisterUser} expand="block">
            Register
          </IonButton>
        </IonCol>
      </IonRow>
      <p> 
          Already have an account? <Link to="/login"> Login </Link>
      </p>
    </IonPage>
  );
};

export default Register;
