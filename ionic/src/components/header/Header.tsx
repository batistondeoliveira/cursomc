import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export interface HeaderProps {
  title: string;
  backTo: string;
}

const Header: React.FC<HeaderProps> = ({ title, backTo }: HeaderProps) => (
  <IonHeader>
    <IonToolbar color="tertiary">
      <IonButtons slot="start">
        <IonBackButton defaultHref={backTo} />
      </IonButtons> 

      <IonTitle style={{fontWeight: 'bold'}}>{title}</IonTitle>     
    </IonToolbar>
  </IonHeader>
)

export default Header;
