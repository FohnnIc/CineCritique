import {IonContent, IonLoading, IonPage,} from '@ionic/react';
import Card from "../../components/Cards/Card";
import React, {useEffect, useState} from "react";

interface Serie {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    // Ajoutez d'autres propriétés si nécessaire
}
const Serie: React.FC = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTA3MzcxOTAwMDM5NTczYTNiYzgyNTQ1YTc5MDJiOSIsInN1YiI6IjY1NzE5MDgyODg2MzQ4MDBlMzFhMTU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c2lML9mCF5hhcPB6XPc4VC-KTps8MZcV_VqbtJ9c9Ng'}
    };

    const [series, setSeries] = useState<Serie[]>([]); // State pour stocker les films
    const [loading, setLoading] = useState(true); // State pour gérer l'état de chargement

    useEffect(() => {
        const fetchSeries = async () => {
            try {
                const response = await fetch("https://api.themoviedb.org/3/tv/popular?language=fr-FR&page=1", options);
                const data = await response.json();
                setSeries(data.results);
            } catch (error) {
                console.error("Erreur lors de la récupération des séries", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSeries();
        // console.log(films);
    }, []);

    return (
        <IonPage>
            <IonContent>
                <IonLoading isOpen={loading} message="Chargement des séries..." />
                {series.map((serie : any) => (
                    <Card
                        isFilm={false}
                        id={serie.id}
                        key={serie.id}
                        score={serie.vote_average}
                        title={serie.title}
                        date={serie.release_date}
                        content={serie.overview}
                        imageUrl={`https://image.tmdb.org/t/p/w500/${serie.poster_path}`}/>
                ))}
            </IonContent>
        </IonPage>
    );
};

export default Serie;
