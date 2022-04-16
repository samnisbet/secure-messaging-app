
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login'
import Home from './screens/Home'
import Tabs from './navigation/tabs'
import Profile from './screens/Profile'
import ProfileStack from './navigation/ProfileStack'
import { initializeApp } from 'firebase/app';
import { app } from './Firebase';


const Stack = createNativeStackNavigator();


export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen options={{ headerShown: false }} name= "Home" component={Tabs} />
          <Stack.Screen options={{ headerShown: false }} name= "Profile" component={ProfileStack} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});