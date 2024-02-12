import {IonHeader, IonTitle, IonToolbar} from "@ionic/react";
import React from "react";
import "./Header.scss";
interface HeaderProps { }

const Header: React.FC<HeaderProps> = () => {
    return (
        <IonHeader className={"ionHeader"}>
            <IonToolbar>
                <IonTitle><h1>CinéCritique</h1></IonTitle>
            </IonToolbar>
        </IonHeader>
    );
};

export default Header;
