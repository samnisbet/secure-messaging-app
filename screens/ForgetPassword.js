import React,{useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Pressable, Alert} from 'react-native';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { authentication } from "../firebase/firebase-config"

    const ForgetPassword = ({navigation}) => {
      const [email, setEmail] = useState('')

      const passwordReset =() => {
        sendPasswordResetEmail(authentication, email)
          .then(() => {
            alert("email sent")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert("Didn't work")
          });
      }


    return (
      <View style={styles.container}>
      
    <View>
    <Text style={{fontSize: 30,fontFamily: 'Normal',
        color: 'rgb(76,0,153)', fontWeight: 'bold', marginLeft:30}}>Trouble Logging in?</Text>
        <Text style={{marginBottom:20, marginTop:50, marginLeft:30,marginRight:30}}>Enter your email and we will send you a link to get back into your account</Text>
      </View>


     
      <View>
        <TextInput
          placeholder='Email Address'
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
          />
      </View>


      <Pressable style={styles.link} onPress={passwordReset}>
          <Text style={{fontSize:20, marginRight:100}} >Submit</Text>
      </Pressable>

    
      </View>
    )
  }

export default ForgetPassword;
  
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input: {
        backgroundColor: '#dac2f0',
        height: 30,
        width: 300,
        marginTop: 10
    },
    
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 10,
        backgroundColor: '#bf94e4',
        marginTop: 20,
        width: 200
    },
    link: {
        marginTop: 15,
        marginLeft:90,
        fontSize:25,
        
    },
    buttonContainer:{
      flexDirection: 'row',
      marginTop:80,
      fontSize:50,
      
    
  }
  

});