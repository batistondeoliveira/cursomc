import { Suspense, lazy } from 'react';
import { IonRouterOutlet, IonSpinner, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Switch } from 'react-router-dom';
import Menu from '../components/Menu';

import "./Routes.css";

const Home = lazy(() => import('pages/home/Home'));
const Categorias = lazy(() => import('pages/categorias/Categorias'));

const Routes: React.FC = () => {
  return (
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <Menu />
        <IonRouterOutlet id="main">
          <Suspense fallback={<div className="d-flex justify-content-center mt-5 pt-5"> <IonSpinner name="crescent" color="tertiary" className="spinner" /> </div>}>
            <Switch>
              <Route path="/" exact={true} component={Home} />
              <Route path="/categorias" exact={true} component={Categorias} />
            </Switch>
          </Suspense>
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  );
};

export default Routes;
