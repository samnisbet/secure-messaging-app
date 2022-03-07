import React, {useState} from 'react';
import {
    View, 
    Text,
    TextInput, 
    Button,
    TouchableOpacity, 
    Dimensions, 
    StyleSheet,
    Platform
} from 'react-native';

function Login() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={{fontSize: 25}}>Login</Text> 
            </View>
            <Text style={{marginTop: 40}}>Email</Text>
            <View style={styles.input}> 
                <TextInput placeholder='Your Email'/>
            </View>
            <Text style={{marginTop: 15}}>Password</Text>
            <View>
                <TextInput placeholder='Your Password'/>
            </View>
            <Button title='Log In'/>
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
    
});