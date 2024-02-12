import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon, IonInput,
    IonModal,
    IonPage,
    IonTitle,
    IonToolbar,
} from '@ionic/react';
import React, {useEffect, useRef, useState} from 'react';
import './MaListe.scss';
import ToolbarList from "../../components/toolbarList/ToolbarList";
import {closeCircleOutline, videocamOutline} from "ionicons/icons";
// @ts-ignore
import {writeFile, readData, deleteListItem} from "./function.tsx";
import Card from "../../components/Cards/Card";
import CardPlaylist from "../../components/Cards/CardPlaylist";
interface uneListe {
    title: string;
    description: string;
    lists: string[];
}
const MaListe: React.FC = () => {
    const modal = useRef<HTMLIonModalElement>(null);
    const [list, setList] = useState<uneListe[]>([]); // State pour gérer l'état de chargement
    const [listName, setListName] = useState<string>('');
    const [listDescription, setListDescription] = useState<string>('');
    const [updateFlag, setUpdateFlag] = useState<boolean>(false);
    const handleCreateList = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const listData = { title: listName, description: listDescription, films: [] };
        console.log('Création de la liste : ', listName, listDescription);
        console.log('Création de la liste : ', listData);

        if (listData.description.trim() !== '') {
            await writeFile(listData);
            modal.current?.dismiss();

            await fetchPlaylist();
            setUpdateFlag(prevFlag => !prevFlag);
        } else {
            console.error('La description ne peut pas être vide.');
        }

        console.log('Données à écrire : ', listData);
    };
    const fetchPlaylist = async () => {
        try {
            setList(await readData());
            console.log('Données lues : ', list);
        } catch (error) {
            console.error("Erreur lors de la récupération des playlists", error);
        }
    };
    const handleReadData = async () => {
        try {
            const data = await readData();
            console.log('Données lues : ', data);

        } catch (error) {
            console.error('Erreur lors de la lecture des données : ', error);
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
    const HandlesetListDescription = (description: string) => {
        console.log('Description : ', description);
        setListDescription(description);
    }
    const handleDeletePlaylist = (index: number) => {
        deleteListItem(index).then(() => {
            setList(prevList => prevList.filter((_, i) => i !== index));
        });
    }
    return (
        <IonPage>
            <IonContent className="list_container_playlist">
                <br/>
                <br/>
                <br/>
                <br/>
                <ToolbarList/>

                {list.map((l: any, index) => (
                    <CardPlaylist index={index} onDelete={handleDeletePlaylist} add={false} title={l.title} key={index} description={l.description} list={l.list}/>

                ))}
            </IonContent>
            <br/>
            <br/>
            <br/>

            <IonModal ref={modal} keepContentsMounted={true} trigger="open-modal">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonButton onClick={() => modal.current?.dismiss()}>
                                <IonIcon icon={closeCircleOutline} slot="start"/>
                            </IonButton>
                        </IonButtons>
                        <IonTitle>Créer une Liste</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent className="ion-padding">
                    <IonButton color="danger" onClick={() => modal.current?.dismiss()}>
                        <IonIcon icon={closeCircleOutline}/>
                    </IonButton>
                    <form onSubmit={(e) =>handleCreateList(e)}>
                        <IonInput
                            label="Nom de la liste"
                            onIonChange={(e) => setListName(e.detail.value ?? '')}
                            labelPlacement="stacked"
                            placeholder="Nom de la liste"
                        ></IonInput>
                        <IonInput
                            label="Description"
                            onIonChange={(e) => HandlesetListDescription(e.detail.value  ?? '')}
                            labelPlacement="stacked"
                            placeholder="Courte description"
                        ></IonInput>
                        <IonButton color="success" expand="block" type="submit" >Créer</IonButton>

                    </form>

                        <br/>
                </IonContent>
            </IonModal>


        </IonPage>
    );
};

export default MaListe;
