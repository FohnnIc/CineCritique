import React from "react";
import {
    IonCard,
    IonCardContent,
    IonCardHeader, IonIcon,

    IonText, IonTitle
} from "@ionic/react";
import "./CardPlaylist.scss";
import { informationCircleOutline} from "ionicons/icons";
import {addFilmListItem, deleteListItem, readData,} from "../../pages/maListe/function";
interface CardPlaylistProps {
    title: string ;
    description: string ;
    list: string[];
    index: number;
    add: boolean;
    onDelete: ((index: number ) => void )| undefined;
}


const CardPlaylist: React.FC<CardPlaylistProps> = ({title, description, list, index,add,onDelete}) => {

    const fetchPlaylist = async () => {
        try {
            const data = await readData();
            console.log('Données lues : ', data);
            return data;
        } catch (error) {
            console.error("Erreur lors de la récupération des playlists", error);
            return [];
        }
    };
    const handleDelete = () => {
        if (onDelete) {
            onDelete(index);
        } // Call the onDelete function with the index
    };


    return (
        <>
            <IonCard className="playlist_card_container">
                {add?<div className="card_container_header_add" onClick={()=>addFilmListItem(list,index,)}>+</div>
                    :null
                }
                <div className="card_container_header_delete" onClick={handleDelete}>X</div>
                <IonCardHeader className="card_container_header">
                    <IonTitle className={"playlist_card_container_header_title"}>{title} :</IonTitle>
                    <br/>
                    <IonText className={"playlist_card_container_header_description"}> <IonIcon
                        icon={informationCircleOutline}/>    {description}</IonText>
                </IonCardHeader>


                <IonCardContent className={"card_container_content"}>
                    -{list}
                </IonCardContent>
            </IonCard>
        </>

    );
};

export default CardPlaylist;
