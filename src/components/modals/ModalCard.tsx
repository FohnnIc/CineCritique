import React, {useEffect, useRef, useState} from "react";
import {
    IonButton,
    IonContent,
    IonHeader,
    IonIcon,
    IonInput,
    IonModal,
    IonTitle,
    IonToolbar
} from "@ionic/react";
import { closeCircleOutline } from "ionicons/icons";
import "./ModalCard.scss";
import CardPlaylist from "../Cards/CardPlaylist";
import {readData} from "../../pages/maListe/function";
interface ModalCardProps {
}
interface uneListe {
    title: string;
    description: string;
    lists: string[];
}

const ModalCard: React.FC<ModalCardProps> = () => {

    const modal = useRef<HTMLIonModalElement>(null);
    const [list, setList] = useState<uneListe[]>([]); // State pour gérer l'état de chargement
    const [listName, setListName] = useState<string>('');

    const fetchPlaylist = async () => {
        try {
            setList(await readData());
            console.log('Données lues : ', list);
        } catch (error) {
            console.error("Erreur lors de la récupération des playlists", error);
        }
    };
    useEffect(() => {
        const fetchPlaylistOnMount = async () => {
            try {
                const data = await readData();
                console.log('Données lues : ', data);
                setList(data) // Update the state with the latest data on mount
                await handleReadData();
            } catch (error) {
                console.error("Erreur lors de la récupération des playlists", error);
            }
        };
        fetchPlaylistOnMount().then(r => console.log("fetchPlaylistOnMount"));
    }, []);
    const handleReadData = async () => {
        try {
            const data = await readData();
            console.log('Données lues : ', data);

        } catch (error) {
            console.error('Erreur lors de la lecture des données : ', error);
        }
    };
    return (
        <>
            <div className={"card_addPlaylist"} onClick={() => modal.current?.present()}>+</div>

            <IonModal className={"card_modal"} ref={modal} onDidDismiss={() => console.log("Modal dismissed")}>

                {/* IonContent with padding */}
                <IonContent className="ion-padding">
                    {/* Content of the modal */}
                    <IonButton onClick={() => modal.current?.dismiss()}>
                        <IonIcon icon={closeCircleOutline}/>
                    </IonButton>
                    <p>Ajouter à la Playlist :</p>
                    {list.map((l: any, index) => (
                        <CardPlaylist index={index} add={true}  title={l.title} key={index} description={l.description} list={l.list} onDelete={undefined}/>

                    ))}
                </IonContent>

            </IonModal>
        </>
    );
};

export default ModalCard;
