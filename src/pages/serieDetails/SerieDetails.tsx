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
interface Season {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string;
    season_number: number;
}

interface SerieDetailsProps {
    id: number;
    name: string;
    seasons: Season[];
    overview: string;
    poster_path: string;
    vote_average: number;
    genres: Genre[];
    budget: number;
    revenue: number;
    runtime: number;
    description: string;
}

const SerieDetails: React.FC = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTA3MzcxOTAwMDM5NTczYTNiYzgyNTQ1YTc5MDJiOSIsInN1YiI6IjY1NzE5MDgyODg2MzQ4MDBlMzFhMTU2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.c2lML9mCF5hhcPB6XPc4VC-KTps8MZcV_VqbtJ9c9Ng',
        },
    };
    const { id } = useParams<{ id: string }>();
    const [serieDetails, setSerieDetails] = useState<SerieDetailsProps | null>(null); // State pour stocker les détails du film
    const [loading, setLoading] = useState(true); // State pour gérer l'état de chargement

    useEffect(() => {
        const fetchSerieDetails = async () => {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/tv/${id}?language=fr-FR&page=1`, options);
                const data = await response.json();
                setSerieDetails(data);
            } catch (error) {
                console.error("Erreur lors de la récupération des détails du film", error);
            } finally {
                setLoading(false);
            }
        };
        fetchSerieDetails();
    }, [id]);

    return (
        <IonPage>
            <IonContent>
                <IonLoading isOpen={loading} message="Chargement des détails..." />
                {serieDetails && (
                    <DetailsContent
                        isFilm={false}
                        title={serieDetails.name}
                        img={serieDetails.poster_path}
                        year={serieDetails.seasons[1].air_date}
                        note={serieDetails.vote_average}
                        genres={serieDetails.genres}
                        budget={serieDetails.budget}
                        revenue={serieDetails.revenue}
                        duree={serieDetails.seasons.length}
                        description={serieDetails.overview}
                    />
                )}
            </IonContent>
        </IonPage>
    );
};

export default SerieDetails;
