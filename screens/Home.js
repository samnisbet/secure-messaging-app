import React, { useLayoutEffect, useState, useEffect} from "react";
import {StyleSheet, Text, View, ScrollView, TouchableOpacity} from "react-native";
import { SafeAreaView } from "react-native";
import {AntDesign, SimpleLineIcons} from "@expo/vector-icons"
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListItem, Avatar} from "react-native-elements";
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
    serverTimestamp, getDoc } from "firebase/firestore";
import {authentication, db} from '../firebase/firebase-config'
import CustomListItem from "../components/CustomListItem";


const Home = ({navigation}) => {
    const [chats, setChats] = useState([]);

    useEffect(() =>{
        // const unsubscribe = await getDoc(collection(getFirestore(), 'chats')).onSnapshot((snapshot) => 
        const unsubscribe =  db.collection( 'chats').onSnapshot((snapshot) => 
            setChats(
                snapshot.docs.map((doc) => ({
                id:doc.id,
                data: doc.data()
            }))
            )
        );
    return unsubscribe;
        
    }, []);

    useLayoutEffect(() =>{
        navigation.setOptions({
            title: "Conversations ",
            headerStyle: {backgroundColor: "#fff"},
            
        headerRight: () =>(
            <View style={{
                flexDirection:"row",
                justifyContent:"space-between",
                width:80,
                marginRight:-29,
            }}>
                <TouchableOpacity onPress={() => navigation.navigate("NewChat")}>
                    <AntDesign name= 'plus' size={24} color= "black"/>
                </TouchableOpacity>
            </View>
        ),
    });
    }, [navigation]);

    const enterChat =(id, chatName) =>{
        navigation.navigate("Chat", {
            id, chatName,
        });
    };
 

    return (
        <SafeAreaView>
            <ScrollView>
                {chats.map(({id, data: {chatName}}) => (
                    <CustomListItem key={id} id={id} chatName={chatName} enterChat={enterChat}/>
                ))}
         {/* <CustomListItem onPress={() => navigation.navigate("Chat" )}/> */}
            </ScrollView>
        </SafeAreaView>
    );
};

export default Home;

const styles = StyleSheet.create({
    floatingButton:{
        width: 60,  
        height: 60,   
        borderRadius: 30,            
        backgroundColor: '#ee6e73',                                    
        position: 'absolute',                                          
        bottom: 10,                                                    
        right: 10, 
      }
});






























// import React, { useState, useEffect, useCallback } from 'react'
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
// import { GiftedChat } from 'react-native-gifted-chat'
// import 'firebase/firestore';
// import { Firestore } from 'firebase/firestore';
// import { authentication} from '../firebase/firebase-config';



// const Home = ({navigation}) => {

//     return (
//         <View>

            
//             <Button 
//             style={styles.buttonText} onPress={() => navigation.navigate("Chat" )}
//             title="Joe P" 
//             color ="black"
//              />
//             <Text>               
//              ____________________________________________________
//             </Text>
//              <Button 
//             style={styles.buttonText} onPress={() => navigation.navigate("Chat")}
//             title="Marcus" 
//             color ="black"
//              />
//              <Text>               
//              ____________________________________________________
//             </Text>
//         </View>
//     )
// }

// export default Home

// const styles = StyleSheet.create({})




// //     // const [ messages, setMessages] = useState([]);
// //     // const db = firebase.firestore()

// //     const[messages, setMessages] = useState([])
    

// //     useEffect(() => {
// //         setMessages([
// //             {
// //                 _id: 1,
// //                 text:'Hey',
// //                 createdAt: new Date(),
// //                 user: {
// //                     _id: 2,
// //                     name: 'React Native',
// //                     avatar: 'https://placeimg.com/640/460/animals',
// //                 },
// //             },
// //         ])
// //     }, [])

// //     const onSend = (messages = []) => {
// //         setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
// //     }
    
// //     return (
// //         <View style={{flex:1}}>
           
// //             <GiftedChat
// //              messages={messages}
// //              onSend={messages => onSend(messages)}
// //              user={{
// //                  _id:1,
// //              }}
// //              />
        
// //         </View>
// //     )
// // }

// // // export default Home

// // const styles = StyleSheet.create({
// //     TextInput:{
// //         height:40,
// //         width:'100%',
// //         borderWidth:1,
// //         borderRadius:5,
// //         padding:10,
// //         marginBottom: 20,
// //     }
// // })

