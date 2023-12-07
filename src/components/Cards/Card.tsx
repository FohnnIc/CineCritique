import React from "react";
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/react";
import "./Card.scss";
interface CardProps {
title: string ;
 date: string ;
content: string ;
imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title,imageUrl, date, content }) => {


    return (
       <>
           <IonCard className="card_container">

               <IonCardHeader>
                   <img src={imageUrl} alt="Image du film"/>
                   <IonCardTitle>{title}</IonCardTitle>
                   {date && <IonCardSubtitle>{date}</IonCardSubtitle>}
               </IonCardHeader>

               <IonCardContent>
                   {content}
               </IonCardContent>
           </IonCard>
       </>
    );
};

export default Card;
