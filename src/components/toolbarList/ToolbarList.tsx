import {IonButton, IonContent} from "@ionic/react";
import React from "react";
import "./ToolbarList.scss";
interface ToolbarListProps { }

const ToolbarList: React.FC<ToolbarListProps> = () => {
    return (
        <>
            <div className={"toolbarlist_block"}>
            <IonButton color="success" id="open-modal" expand="block">Créer</IonButton>
            </div>
        </>
    );
};

export default ToolbarList;
