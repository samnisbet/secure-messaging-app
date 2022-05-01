import { StyleSheet, Text, View } from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
import {Button, Input} from "react-native-elements"
import { firestore,authentication} from '../firebase/firebase-config'
import { getFirestore, collection,
    addDoc} from "firebase/firestore";


const NewChat = ({navigation}) => {
    const [input, setInput] = useState("")
    useLayoutEffect(() => {
        navigation.setOptions({
            title:"New Chat"
        });
    }, [navigation]);

 const makeChat = async () =>{
    await firestore.collection('chats').add({
        chatName: input,
    }).then(() => {
        navigation.goBack();
    }).catch((error) => alert(error));
 }
  return (
    <View>
      <Input 
      placeholder ='Enter chat name' 
      value={input}
      onChangeText={(text) => setInput(text)}
      onSubmitEditing={makeChat}
      />
      <Button onPress={makeChat} title= 'Make new chat' />
    </View>
  );
}

export default NewChat

const styles = StyleSheet.create({
    container: {},
});