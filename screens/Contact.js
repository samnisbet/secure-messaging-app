
import {useState} from 'react'
import { StyleSheet, Text, View, TextInput,Button, TouchableOpacity, Linking, Form, Input,Textarea } from 'react-native'
import email from 'react-native-email';
import emailjs from "emailjs-com";
import React from 'react';

const Contact = () => {
  const [text, setText] = useState('')

  const sendQestion =()=>{
      sendQestionToManager(handleEmail, text)
      .then(() => {
          alert("Qestion sent")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert("Didn't work")
        });

  }

  return (
      <View style={styles.textAreaContainer} >
  
          <Text  style={styles.text}>We will respond to you in your email</Text>
          <TextInput 
          style={styles.input} 
          placeholder="Tell us how we can help"
          multiline={true} 
          onChangeText={text => setText(text)}
          />
             
          <View style={styles.buttonContainer}>
          <TouchableOpacity  
          style={styles.button}
          onPress={() => {sendQestion} } >
          <Text style={styles.buttonText}>Submit </Text>
          </TouchableOpacity>
          </View>


      </View>
  )
}
export default Contact

const styles = StyleSheet.create({
    text:{
        fontSize:15,

    },
    input: {
        borderColor: "gray",
        height: 150,
         margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
        justifyContent: "center",
        padding: 8

      },
      textAreaContainer: {
        borderWidth: 1,
        padding: 20,
        marginTop:180,
      },
      buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:40,
        marginLeft:40
     },
      buttonText:{
        color: 'white',
       fontWeight: '700',
        fontSize: 16,
     },
      button:{
       backgroundColor: '#cd9bf1',
       width: '100%',
        padding: 15,
       borderRadius: 10,
        alignItems: 'center',
      },
})
