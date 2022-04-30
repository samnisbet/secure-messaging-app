import React, { useState, useEffect, useCallback, useLayoutEffect} from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import { getFirestore, 
    initializeFirestore,
    collection,
    addDoc,
    query,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp, } from "firebase/firestore";
import {getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from 'firebase/storage'

  import { getMessaging, getToken, onMessage } from 'firebase/messaging';
import { authentication, db } from '../firebase/firebase-config';

export default function Chat (){
    // const [ messages, setMessages] = useState([]);
    // const db = firebase.firestore()

    const[messages, setMessages] = useState([])
    

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text:'Hey',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/630/450/animals',
                },
            },
        ])
    }, [])

    // useLayoutEffect(() => {
    //  db.collection('messages').orderBy('createdAt',
    //   'desc').onSnapshot(snapshot => setMessages(
    //       snapshot.docs.map(doc=>({
    //         _id:doc.data().id,
    //         createdAt:doc.data().createdAt.toDate(),
    //         text:doc.data().text,
    //         user:doc.data().user
    //       }))
    //   ))
    
    //   return unsubscribe;
        
    //   }, [])

    const onSend = (messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages)),
        saveMessage(messages)
        
    }

    
    return (
        <View style={{flex:1}}>
           
            <GiftedChat
             messages={messages}
             onSend={messages => onSend(messages)}
             user={{
                 _id: authentication?.currentUser?.email,
             }}
             />
        
        </View>
    )
}



const styles = StyleSheet.create({
    TextInput:{
        height:40,
        width:'100%',
        borderWidth:1,
        borderRadius:5,
        padding:10,
        marginBottom: 20,
    }
})


async function saveMessage(messageText) {
    // Add a new message entry to the Firebase database.
    try {
      await addDoc(collection(getFirestore(), 'messages'), {
        text: messageText,
        timestamp: serverTimestamp()
      });
    }
    catch(error) {
      console.error('Error writing new message to Firebase Database', error);
    }
  }