import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native'
import profilePic from '../assets/profile.png';
import { getAuth, signOut } from "firebase/auth";

function clickLogout() {
    navigation.navigate('Login')
    const auth = getAuth();
    signOut(auth).then(() => {
        //signed out
    }).catch((error) => {
        //error
    })
}


const Home = ({navigation}) => {
    return (
        <View>
            <Image source ={profilePic} style={{width: 100, height: 100}}/>
            <Text>Joe P</Text>
            <Button title="Edit Display Name" onPress={() => Alert.alert('Enter new Display Name')} />
            <Button 
        onPress={() => navigation.navigate('Notifications')}
        title="Notifications"
      />
            <Button title="Logout" onPress= {() => {clickLogout; navigation.navigate('Login');}} />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})

