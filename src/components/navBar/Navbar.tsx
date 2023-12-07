import {IonButton, IonButtons, IonHeader, IonRouterLink, IonTitle, IonToolbar} from "@ionic/react";
import "./Navbar.scss";
interface ContainerProps { }

const NavBar: React.FC<ContainerProps> = () => {
    return (
        <>
            <IonHeader className="navbar">
                <IonToolbar>
                    <IonButtons >
                        <IonButton>
                            <IonRouterLink routerLink="/film">Film</IonRouterLink>
                        </IonButton>
                        <IonButton>
                            <IonRouterLink routerLink="/serie">Serie</IonRouterLink>
                        </IonButton>
                        <IonButton>
                            <IonRouterLink routerLink="/home">Accueil</IonRouterLink>
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
        </>
    );
};

export default NavBar;
