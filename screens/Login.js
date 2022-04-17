import React, { useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, View, Button } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Firebase'
import { NavigationContainer} from '@react-navigation/native'
import {useNavigation} from '@react-navigation/core'

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    /* const navigation = useNavigation

    useEffect(() => {
      const unsubscribe = auth.onAuthStateChanged(user => {
            if(user) {
               navigation.navigate("Home")
            }
        })
        return unsubscribe
    }, []) */

    const handleRegister =() => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((re)=>{
                console.log(re);
            })
            .catch((re)=>{
                console.log(re);
            })
    };

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

            <View style={{marginLeft:150}}>
                <Button onPress={() => navigation.navigate('ForgetPassword')} title="ForgetPassword?" color = "purple" >
                </Button>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={() => { }}
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

                <TouchableOpacity
            
                    onPress= {() => navigation.navigate('Home')}
                    style={[styles.button, styles.buttonOutline]}
                >
                    <Text style={styles.buttonOutlineText}>Home</Text>
                </TouchableOpacity>
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