import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, Button } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native'
import { authentication } from '../firebase/firebase-config'
import { NavigationContainer} from '@react-navigation/native'
import {useNavigation} from '@react-navigation/core'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
//import * as firebase from 'firebase'
//import { EThree } from '@virgilsecurity/e3kit-native' // E3Kit for E2EE

const Login = ({navigation}) => {
    const [isSignedin,setIsSignedIn] = useState(false);
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //E2EE: 
    //const getToken = firebase.functions().httpsCallable('getVirgilJwt')
    //const initializeFunction = () => getToken().then(result => result.data.token)
    

    const SignInUser = ()=>{
        signInWithEmailAndPassword(authentication, email, password)
        .then((re)=>{
            setIsSignedIn(true),
            navigation.navigate('Home');
        })
        .catch((re)=>{
            alert("incorrect Username or Password");
        })
    }

    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
        >
            <View>
               <Text style={styles.title}>Login</Text>
            </View>

            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                    secureTextEntry
                />
            </View>

            <View style={{marginLeft:150, paddingTop: 10}}>
                <Button onPress={() => navigation.navigate('ForgetPassword')} title="Forgot Password?" color = "purple" >
                </Button>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={SignInUser}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  
                    onPress= {() => navigation.navigate('Register')}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Create new account</Text>
                </TouchableOpacity>

                {/* <TouchableOpacity
            
                    onPress= {() => navigation.navigate('Home')}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Home</Text>
                </TouchableOpacity> */}
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer:{
        width: '80%'
    },
    input:{
        backgroundColor: 'white',
        paddingHorizontal: 32,
        paddingVertical: 12,
        borderRadius: 4,
        marginTop: 15,
    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:40,
    },
    button:{
        backgroundColor: '#cd9bf1',
        width: '100%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    buttonOutline:{
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#cd9bf1',
        borderWidth: 2,
    },
    buttonText:{
        color: 'white',
        fontWeight: '700',
        fontSize: 16,
    },
    buttonOutlineText:{
        color: '#cd9bf1',
        fontWeight: '700',
        fontSize: 16,
    },
    title:{
        fontSize: 30,
        color: 'rgb(76,0,153)', 
        fontWeight: 'bold',
    }
    
})