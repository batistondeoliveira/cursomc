import { IonBackButton, IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar } from "@ionic/react";
import { useLocation } from "react-router";

export interface HeaderProps {
  title: string;
  to: string;
}

const Header: React.FC<HeaderProps> = ({ title, to }: HeaderProps) => {
  const location = useLocation();
 console.log(location);

  return (
    <IonHeader>
      <IonToolbar color="tertiary">
        <IonButtons slot="start">
          {location.pathname === '/categorias'
            ? <IonMenuButton />
            : <IonBackButton defaultHref={to} />
          }
        </IonButtons> 

        <IonTitle style={{fontWeight: 'bold'}}>{title}</IonTitle>     
      </IonToolbar>
    </IonHeader>
  )
}

export default Header;
