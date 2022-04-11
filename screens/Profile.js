import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native'
import profilePic from '../assets/profile.png';

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

        </View>
    )
}

export default Home

const styles = StyleSheet.create({})

