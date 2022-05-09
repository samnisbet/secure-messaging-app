import { GiftedChat } from 'react-native-gifted-chat'
import React, {useEffect, useCallback, useState} from 'react';
import {KeyboardAvoidingView, Platform} from "react-native";

export default function GroupChat({ route }) {
    const [messages, setMessages] = useState([]);
    const [ user, updateUser ] = useState({
        email:'',
        _id:'',
        name:'',
        avatar:'',  
      })

    useEffect(() => {
  
        setMessages([]);
    }, []);

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
    }, []);

    return (
        <>
            <GiftedChat
                user={user}
                messages={messages}
                renderUsernameOnMessage
                onSend={messages => onSend(messages)}
            />
            { Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" /> }
        </>
    );
};