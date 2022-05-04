import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native'
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'
import { authentication } from '../firebase/firebase-config'
import { firestore } from '../firebase/firebase-config'
import { collection, addDoc } from "firebase/firestore"
import { NavigationContainer} from '@react-navigation/native'
import {useNavigation} from '@react-navigation/core'

const Register = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [uid, setUID] = useState('')
    const usersCollection = collection(firestore, 'users')

    async function saveUser() {
        // Add a new user entry to the Firestore
        try{
            const docRef = await addDoc(collection(firestore, 'users'), {
                uid: uid,
                email: email,
                name: name,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    const handleRegister =() => {
        createUserWithEmailAndPassword(authentication, email, password)
            .then(userCredentials => {
                const user = userCredentials.user;
                setUID(user.uid);
                console.log(user.email);
                navigation.navigate('Home');
            })
            .catch(error => alert(error.message))
            .then(saveUser)
        }

    return (
        
        <KeyboardAvoidingView
            style={styles.container}
            behavior="padding"
           >
             <View>
               <Text style={styles.title}>Account Signup</Text>
            </View>

            <View style={styles.inputContainer}>
            <TextInput
                    placeholder="Username"      
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder='Email Address'
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

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={handleRegister}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Sign up</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress= {() => navigation.navigate('Login')}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Already have an account</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Register

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