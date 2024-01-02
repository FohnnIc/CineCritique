import {
    IonContent,
    IonLoading,
    IonPage,
} from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import DetailsContent from '../../components/detailsContent/detailsContent';

interface Genre {
    name: string;
}

interface FilmDetailsProps {
    id: number;
    title: string;
    release_date: string;
    overview: string;
    poster_path: string;
    vote_average: number;
    genres: Genre[];
    budget: number;
    revenue: number;
    runtime: number;
    description: string;
}

const FilmDetails: React.FC = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTA3MzcxOTAwMDM5NTczYTNiYzgyNTQ1YTc5MDJiOSIsInN1YiI6IjY1NzE5MDgyODg2MzQ4MDBlMzFhMTU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c2lML9mCF5hhcPB6XPc4VC-KTps8MZcV_VqbtJ9c9Ng',
        },
    };
    const { id } = useParams<{ id: string }>();
    const [filmDetails, setFilmDetails] = useState<FilmDetailsProps | null>(null); // State pour stocker les détails du film
    const [loading, setLoading] = useState(true); // State pour gérer l'état de chargement

    useEffect(() => {
        const fetchFilmDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=fr-FR&page=1`, options);
                const data = await response.json();
                setFilmDetails(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des détails du film", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFilmDetails();
    }, [id]);

    return (
        <IonPage>
            <IonContent>
                <IonLoading isOpen={loading} message="Chargement des détails..." />
                {filmDetails && (
                    <DetailsContent
                        isFilm={true}
                        title={filmDetails.title}
                        img={filmDetails.poster_path}
                        year={filmDetails.release_date}
                        note={filmDetails.vote_average}
                        genres={filmDetails.genres}
                        budget={filmDetails.budget}
                        revenue={filmDetails.revenue}
                        duree={filmDetails.runtime}
                        description={filmDetails.overview}
                    />
                )}
            </IonContent>
        </IonPage>
    );
};

export default FilmDetails;
