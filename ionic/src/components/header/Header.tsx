import { IonBackButton, IonButtons, IonHeader, IonTitle, IonToolbar } from "@ionic/react";

export interface HeaderProps {
  title: string;
  to: string;
}

const Header: React.FC<HeaderProps> = ({ title, to }: HeaderProps) => (
  <IonHeader>
    <IonToolbar color="tertiary">
      <IonButtons slot="start">
        <IonBackButton defaultHref={to} />
      </IonButtons> 

      <IonTitle style={{fontWeight: 'bold'}}>{title}</IonTitle>     
    </IonToolbar>
  </IonHeader>
)

export default Header;
