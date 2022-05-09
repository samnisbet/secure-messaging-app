import React, { useState, useEffect, useCallback, useLayoutEffect} from 'react'
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Platform, TouchableOpacity,ScrollView, Keyboard} from 'react-native'
import { GiftedChat } from 'react-native-gifted-chat'
import {AntDesign, SimpleLineIcons, Ionicons} from "@expo/vector-icons"
import { MessageOutlined, SendOutlined } from '@ant-design/icons';
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
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import firebase from "firebase/compat/app";
import {db, authentication} from '../firebase/firebase-config'
import {Avatar} from "react-native-elements";

export default function Chat ({navigation, route}){
    // const [ messages, setMessages] = useState([]);
    // const db = firebase.firestore()


    

    
    const[messages, setMessages] = useState([])
    const [input, setInput] = useState("");
    

    // useEffect(() => {
    //     setMessages([
    //         {
    //             _id: 1,
    //             text:'Hey',
    //             createdAt: new Date(),
    //             user: {
    //                 _id: 2,
    //                 name: 'React Native',
    //                 avatar: 'https://placeimg.com/630/450/animals',
    //             },
    //         },
    //     ])
    // }, [])

    // useLayoutEffect(() => {
    // const unsubscribe = db.collection('chats').orderBy('createdAt',
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
        db.collection('chats').doc(route.params.id).collection('messages').add({
            message: messages,
            email: authentication.currentUser.email,
        })
    };

    const sendMessage = () =>{
        Keyboard.dismiss();
        
        db.collection('chats').doc(route.params.id).collection('messages').add({
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            message:input,
            displayName:authentication.currentUser.email,
            email: authentication.currentUser.email,
        })
        setInput('')
    };

   
    useLayoutEffect(() =>{
        const unsubscribe = db
        .collection("chats")
        .doc(route.params.id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => setMessages(
            snapshot.docs.map((doc) => ({
                id: doc.id,
                data:doc.data(),
            }))

        ));
        return unsubscribe;
    }, [route]);


    return (
        <View style={{flex:1}}>
           <Text>{route.params.chatName}</Text>
            {/* <GiftedChat
             messages={messages}
             onSend={messages => onSend(messages)}
             scrollToBottom
             showUserAvatar
             user={{
                 _id: authentication?.currentUser?.email,
                 name:authentication?.currentUser?.displayName,
                 avatar: 'https://placeimg.com/140/140/any'
                 }}
             />
         */}
        <SafeAreaView style={{flex:1}}>
            <StatusBar style='light'/>
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={90}
            >
                <>
                <ScrollView>
                    {messages.map(({id, data}) => (
                        data.email === authentication.currentUser.email ? (
                            <View key={id} style={styles.receive}>
                                 {/* <Avatar
                                    rounded
                                    position="absolute"
                                    size={25}
                                    bottom={-20}
                                    right={-3}
                                    source={{
                                    uri:
                                    "https://placeimg.com/140/140/any"}}
                                 /> */}                              
                                <Text>{data.message}</Text>
                            </View>
                        ) : (
                            <View style={styles.send}>
                                {/* <Avatar
                                    rounded
                                    position="absolute"
                                    size={25}
                                    bottom={-20}
                                    right={-3}
                                    source={{
                                    uri:
                                    "https://placeimg.com/140/140/any"}}
                                 /> */}
                                <Text>{data.message}</Text>
                                <Text style={styles.sendName}>{data.email}</Text>
                            </View>
                        )
                    ))}
                </ScrollView>
                <View style={styles.footer}>
                    <TextInput 
                    value={input} 
                    onChangeText={text => setInput(text)} 
                    onSubmitEditing={sendMessage}
                    placeholder='Messages'
                    style={styles.textInput}/>
                    <TouchableOpacity
                        onPress={sendMessage}
                    >
                <AntDesign name= 'right' size={24} />               
                  </TouchableOpacity>
                </View>
                </>
            </KeyboardAvoidingView>
            </SafeAreaView>
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
    },
    container:{
        flex:1,
    },
    footer:{
        flexDirection:"row",
        alignItems:"center",
        width:"100%",
        padding:20,
    },
    textInput:{
        bottom:0,
        height:40,
        flex: 1,
        marginRight: 15,
        borderColor:"transparent",
        backgroundColor: '#d1c4e9',
        borderWidth: 1,
        padding: 10,
        color: "black",
        borderRadius:40,
    },
    receive:{
        padding: 20,
        backgroundColor:'#d1c4e9',
        alignSelf: "flex-end",
        borderRadius:20,
        marginRight: 20,
        marginBottom:25,
        maxWidth:"85%",
        position: "relative",
    },
    send:{
        padding: 20,
        backgroundColor:'#d1c4e9',
        alignSelf: "flex-start",
        borderRadius:20,
        marginRight: 20,
        marginBottom:25,
        maxWidth:"85%",
        position: "relative",
    },
    sendName:{
        left:12,
        paddingRight:12,
        fontSize:12,
        color: "black",
    },
    
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