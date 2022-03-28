import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as firebase from "firebase";

import {
    View, 
    Text,
    TextInput,
    Button,
    Pressable,
    Alert,
    StyleSheet,
    FlatList,
} from 'react-native';

function Home() {
    return(
    <View style={styles.container}>
        <Text style={{marginTop: 55}}>Email</Text>
        <View>
            <TextInput placeholder='Email' style={styles.input}/>
        </View>
        <Text style={{marginTop: 15}}>Password</Text>
        <View>
            <TextInput placeholder='Password' secureTextEntry={true} style={styles.input}/>
        </View>
        <Pressable style={styles.button} onPress={() => navigation.navigate('Login')}>
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

export default Home

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cd9bf1'
    },
    input: {
        backgroundColor: '#dac2f0',
        height: 30,
        width: 200,
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
        marginTop: 15
    },
    link: {
        marginTop: 15,

    },
});