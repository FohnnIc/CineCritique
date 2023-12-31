import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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
import Film from "./pages/film/Film";
import Serie from "./pages/serie/Serie";
import React from "react";
import FilmDetails from "./pages/filmDetails/FilmDetails";
import SerieDetails from "./pages/serieDetails/SerieDetails";
setupIonicReact();

const App: React.FC = () => (
  <IonApp>

    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/film">
          <Film />
        </Route>
        <Route exact path="/serie">
          <Serie />
        </Route>
        <Route exact path="/film/:id">
          <FilmDetails />
        </Route>
        <Route exact path="/tv/:id">
          <SerieDetails/>
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>


      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
