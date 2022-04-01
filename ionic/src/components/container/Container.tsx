import { IonContent, IonPage } from "@ionic/react";
import Header, { HeaderProps } from "components/header/Header";

export interface ContainerProps {
  header: HeaderProps;
  children: any;
}

const Container: React.FC<ContainerProps> = ({ header, children }: ContainerProps) => {
  const { title, to } = header;

  return (
    <IonPage>
      <Header title={title} to={to} />

      <IonContent fullscreen>
        <div style={{padding: '10px'}}>
          {children}
        </div>
      </IonContent>    
    </IonPage>
  )
}

export default Container;
