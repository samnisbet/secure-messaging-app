import React, {useState} from 'react';
import {
    View, 
    Text,
    TextInput,
    Button,
    Pressable,
    Alert,
    StyleSheet,
} from 'react-native';

function Login() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 25, marginBottom: 15    }}>Login</Text>
            </View>
            <Text style={{marginTop: 40}}>Email</Text>
            <View style={styles.input}> 
                <TextInput placeholder='Your Email'/>
            </View>
            <Text style={{marginTop: 15}}>Password</Text>
            <View>
                <TextInput placeholder='Your Password' secureTextEntry={true}/>
            </View>
            <Pressable style={styles.button} onPress={() => Alert.alert('Login Button Pressed')}>
                <Text>Log in</Text>
            </Pressable>
            <Pressable style={styles.link} onPress={() => Alert.alert('Reset Password')}>
                <Text>Forgot Password?</Text>
            </Pressable>
            <Pressable style={styles.link} onPress={() => Alert.alert('Sign Up')}>
                <Text>Sign Up</Text>
            </Pressable>
        </View>
    )
}

export default Login;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cd9bf1'
    },
    input: {

    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 10,
        backgroundColor: '#bf94e4',
        marginTop: 15
    },
    link: {
        marginTop: 15,

    },
});