import * as React from 'react';
import firebaseConfig from "./CONFIG/FirebaseSDK";
import * as firebase from "firebase";
import Login from "./components/Login";
import Home from "./components/Home";
import Chat from './components/Chat';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { initializeApp } from 'firebase/app';

const Stack = createNativeStackNavigator();
initializeApp(firebaseConfig);

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}




