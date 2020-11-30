import React, { useState} from 'react';
import Item from "./Item";
import firebase from 'firebase';
import {useCollection} from 'react-firebase-hooks/firestore';
import {IonList, IonItem, IonLabel, IonText, IonItemSliding, IonItemOption, IonItemOptions, IonIcon} from '@ionic/react';
import {document, trash} from 'ionicons/icons';

export default function ItemList({doEdit}){
    const [value, loading, error] = useCollection(
        firebase.firestore().collection("items").orderBy("createdOn","desc"),
        {
            snapshotListenOptions:{includeMetadataChanges: true}

        }
    );
    const closeSlidingItems = () => {
        var list = document.getElementByID("list");
        list.closeSlidingItems();
    };
    const doDelete = (id) => {
        firebase.firestore().collection("items").doc(id).delete();
    };
    return (
        <>
        <h3>To Do:</h3>
        <IonList id="list">
            {value && value.docs.map(doc => {
                return (
                    !loading && (
                        <Item doc={doc}
                        doEdit = {i => {
                            closeSlidingItems();
                            doEdit(i);
                        }}
                        doDelete = {i => {
                            closeSlidingItems();
                            doDelete(i);
                        }}
                    key = {doc.id}
                    />
                    )
                );
            })}
        </IonList>
        </>
    );
}