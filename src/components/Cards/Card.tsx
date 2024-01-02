import React from "react";
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonRouterLink} from "@ionic/react";
import "./Card.scss";
interface CardProps {
title: string ;
 date: string ;
content: string ;
imageUrl: string;
score: number;
id: number;
isFilm: boolean;
}

const Card: React.FC<CardProps> = ({ id,isFilm, title,imageUrl, score, date, content }) => {

    return (

        <IonRouterLink href={`/${isFilm?'film':'tv'}/${id}`}>
           <IonCard className="card_container">
               <IonCardHeader className="card_container_header">
                   <div className={"card_container_header_score"}>{Math.round(score * 10) / 10}/10</div>
                   <img className={"card_container_header_img"} src={imageUrl} alt="Image du film"/>
                   <div className={"card_container_header_row"}>
                       <IonCardTitle className={"card_container_header_row_title"}>{title}</IonCardTitle>
                       <IonCardSubtitle className={"card_container_header_row_date"}>{date}</IonCardSubtitle>
                   </div>
               </IonCardHeader>

               <IonCardContent className={"card_container_content"}>
                   {content}
               </IonCardContent>
           </IonCard>
        </IonRouterLink>

    );
};

export default Card;
