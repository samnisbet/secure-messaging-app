import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import 'firebase/firestore';
import { Firestore } from 'firebase/firestore';


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

    const onSend = (messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }
    
    return (
        <View style={{flex:1}}>
           
            <GiftedChat
             messages={messages}
             onSend={messages => onSend(messages)}
             user={{
                 _id:1,
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

