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

               <IonCardHeader className="card_container_header">
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
       </>
    );
};

export default Card;
