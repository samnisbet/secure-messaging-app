
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
import Register from './screens/Register'
import ForgetPassword from './screens/ForgetPassword';
import Account from './screens/Account';
import Contact from './screens/Contact';
import Privacy from './screens/Privacy';
import Notifications from './screens/Notifications';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator>
        
          <Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />
          <Stack.Screen name= "Home" component={Tabs} />
          <Stack.Screen name= "Profile" component={ProfileStack} />
          <Stack.Screen name= "Register" component={Register} />
          <Stack.Screen name= "ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name= "Account" component={Account} />
          <Stack.Screen name= "Contact" component={Contact} />
          <Stack.Screen name= "Privacy" component={Privacy} />
          <Stack.Screen name= "Notifications" component={Notifications} />



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