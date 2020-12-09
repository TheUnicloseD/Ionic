import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, personOutline, searchOutline } from 'ionicons/icons';
import Fil from './pages/Fil';
import Search from './pages/Search';
import Profil from './pages/Profil';
import Login from './pages/Login';
import Register from './pages/Register';
import Follow from './pages/Follow';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/fil" component={Fil} exact={true} />
          <Route path="/search" component={Search} exact={true} />
          <Route path="/profil" component={Profil} exact={true} />
          <Route path="/login" component={Login}  exact={true} />
          <Route path="/register" component={Register}  exact={true} />
          <Route path="/follow" component={Follow}  exact={true} />
          <Route path="/" render={() => <Redirect to="/fil" />} exact={true} />

        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="fil" href="/fil">
            <IonIcon icon={homeOutline} />
            <IonLabel>Fil</IonLabel>
          </IonTabButton>
          <IonTabButton tab="search" href="/search">
            <IonIcon icon={searchOutline} />
            <IonLabel>Search</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profil" href="/profil">
            <IonIcon icon={personOutline} />
            <IonLabel>Profil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
