import { IonBackButton, IonButtons, IonCol, IonGrid, IonImg, IonPage, IonRow } from "@ionic/react";
import React from "react";
import './User.css'

const User: React.FC = () => {
return (
    <IonPage>
        <IonButtons slot="start">
          <IonBackButton defaultHref='/follow'/> 
        </IonButtons>
<IonGrid>
<IonRow>
<IonCol size="4"><IonImg id="imgProfil" src="https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ecc5358798e4c00060d2274%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1184%26cropX2%3D3286%26cropY1%3D30%26cropY2%3D2130" /></IonCol>
</IonRow>
<IonRow>
<IonCol size="" id="nameProfil"><b>SKG</b> <br/> 22 Years</IonCol>
<IonCol size="">Favorite artist <b>Eminem</b></IonCol>
</IonRow>
</IonGrid>
</IonPage>
)
}

export default User;