import {IonHeader, IonTitle, IonToolbar} from "@ionic/react";
import React from "react";

interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>CinéCritique</IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
