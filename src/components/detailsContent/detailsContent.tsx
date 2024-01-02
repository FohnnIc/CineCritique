import React from "react";
import "./DetailsContent.scss";
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonContent,
    IonIcon,
    IonItem,
    IonLabel,
    IonList
} from "@ionic/react";
import {
    calendarOutline,
    videocamOutline,
    cashOutline,
    extensionPuzzleOutline,
    timeOutline,
    readerOutline, ribbonOutline
} from "ionicons/icons";

interface Genre {
    name: string;
}

interface DetailsContentProps {
    title: string;
    isFilm: boolean;
    img: string;
    year: string;
    genres: Genre[];
    budget: number;
    revenue: number;
    duree: number;
    description: string;
    note: number;
}

const DetailsContent: React.FC<DetailsContentProps> = ({ title,duree, isFilm,description, img,revenue,budget, year,note,  genres }) => {

    return (
        <IonContent>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>{title}</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonList>
                        <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt={"image du film"}/>

                        <IonItem>
                            <IonIcon icon={videocamOutline} slot="start"/>
                            <IonLabel>Titre: {title}</IonLabel>
                        </IonItem>

                        <IonItem>
                            <IonIcon icon={calendarOutline} slot="start"/>
                            <IonLabel>Année de sortie: {year}</IonLabel>
                        </IonItem>

                        <IonItem>
                            <IonIcon icon={ribbonOutline} slot="start"/>
                            <IonLabel>Note : {note} /10</IonLabel>
                        </IonItem>

                        <IonItem>
                            <IonIcon icon={extensionPuzzleOutline} slot="start"/>
                            <IonLabel>Genres:</IonLabel>
                            {genres.map((genre, index) => (
                                <IonLabel key={index} style={{marginLeft: '8px'}}>
                                    {genre.name}
                                </IonLabel>
                            ))}
                        </IonItem>
                        {isFilm ?

                            <IonItem>
                                <IonIcon icon={cashOutline} slot="start"/>
                                <IonLabel>Production: {budget} $</IonLabel>
                                <IonLabel>Revenue: {revenue} $</IonLabel>
                            </IonItem>

                            : null}
                        {isFilm ?

                            <IonItem>
                                <IonIcon icon={timeOutline} slot="start"/>
                                <IonLabel>Durée: {duree} minutes</IonLabel>
                            </IonItem>
                            :
                            <IonItem>
                                <IonIcon icon={timeOutline} slot="start"/>
                                <IonLabel>Nombre de saisons: {duree} </IonLabel>
                            </IonItem>
                        }



                        <IonItem>
                            <IonIcon icon={readerOutline} slot="start"/>
                            <IonLabel>Description: {description} </IonLabel>
                        </IonItem>
                        <br></br>
                        <br></br>


                    </IonList>
                </IonCardContent>
            </IonCard>
        </IonContent>
    );
};

export default DetailsContent;
