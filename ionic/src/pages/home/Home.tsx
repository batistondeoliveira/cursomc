import { IonButton, IonContent, IonInput, IonItem, IonLabel } from "@ionic/react";

import './Home.css';

const Home: React.FC = () => (
  <IonContent    
    scrollEvents={true}
    onIonScrollStart={() => {}}
    onIonScroll={() => {}}
    onIonScrollEnd={() => {}}
    className="home"
  >
    <div style={{padding: '10px'}}>
      <h3>Sistema de pedidos</h3>

      <img src="assets/imgs/tela-inicial.png" alt="logo" />

      <form>
        <IonItem>
          <IonLabel position="stacked">Email</IonLabel>
          <IonInput type="text" />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Senha</IonLabel>
          <IonInput type="password" />
        </IonItem>

        <IonButton expand="block" routerLink="/categorias">Entrar</IonButton>
      </form>

      <IonButton expand="block" fill="outline">Registrar</IonButton>
    </div>
  </IonContent>
);

export default Home;
