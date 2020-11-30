import React, { useState, useEffect} from 'react';
import Item from "./Item"
import firebase from 'firebase';
import {useDocument} from "react-firebase-hooks/firestore";
import {IonList, IonItem, IonLabel, IonText, IonItemSliding, IonItemOption, IonItemOptions, IonIcon, IonButton, IonInput} from '@ionic/react';

export default function AddItem({initialValue, clear}) {
    const [item, setItem] = useState("");
    const [value, loading, error] = useDocument(
        firebase.firestore().doc("items" + initialValue),
        {
            snapshotListenOptions: {includeMetadataChanges: true}
        }
    );

    useEffect(() => {
        !loading && initialValue && value.exists && setItem(value.data().name);
    },
    [loading, initialValue, value]);

    const onSave = async() => {
        let collectionRef = firebase.firestore().collextion("items");
        if(initialValue) {
            await (collectionRef).doc(initialValue).set(
                {name: item, createdOn: new Date.getTime() });
                setItem("");
                clear();
        }
    };
    return (
        <>
            <IonItem>
                <IonInput value={item} onInput={e => setItem(e.target.value)}/>
            </IonItem>
            <IonButton style={{marginTop:8}} onClick={onSave}>
                Save
            </IonButton>
            <IonButton style={{marginTop:8}} onClick={()=>{
                setItem("");
                clear();
            }}>
                Clear
            </IonButton>
        </>
    );
}