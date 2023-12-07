import {IonContent, IonHeader, IonLoading, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import Card from "../../components/Cards/Card";
import React, {useEffect, useState} from "react";

interface Film {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    // Ajoutez d'autres propriétés si nécessaire
}
const Film: React.FC = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTA3MzcxOTAwMDM5NTczYTNiYzgyNTQ1YTc5MDJiOSIsInN1YiI6IjY1NzE5MDgyODg2MzQ4MDBlMzFhMTU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c2lML9mCF5hhcPB6XPc4VC-KTps8MZcV_VqbtJ9c9Ng'}
    };

    const [films, setFilms] = useState<Film[]>([]); // State pour stocker les films
    const [loading, setLoading] = useState(true); // State pour gérer l'état de chargement

    useEffect(() => {
        const fetchFilms = async () => {
            try {
                const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=fr-FR&page=1", options);
                const data = await response.json();
                setFilms(data.results);
            } catch (error) {
                console.error("Erreur lors de la récupération des films", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFilms();
        console.log(films);
    }, []);


    return (
        <IonPage>
            <IonContent>
                <IonLoading isOpen={loading} message="Chargement des films..." />
                {films.map((film: any) => (
                    <Card
                        key={film.id}
                        title={film.title}
                        date={film.release_date}
                        content={film.overview}
                        imageUrl={`https://image.tmdb.org/t/p/w500/${film.poster_path}`}/>
                    ))}

            </IonContent>
        </IonPage>
    );
};

export default Film;
