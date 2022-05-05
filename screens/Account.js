import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
// import {uid} from 'uid';
import { getAuth, deleteUser} from "firebase/auth";
import { authentication } from '../firebase/firebase-config'

const Account = () => {
  const auth = getAuth();
const prevUser = auth.currentUser;

  const deleteAccount =() =>{
    deleteUser(auth)
    .then(() => {
      console.log('Successfully deleted user');
    })
    .catch((error) => {
      console.log('Error deleting user:', error);
    });
  
    }
  
    return (
        <View  style={styles.container}>
            <Text style={styles.title}>Delete My Account</Text>
            <Text  style={styles.titleText}>Deleting your account will: </Text>
            <Text>-Delete your account info and prodile photo</Text>
            <Text>-Delete you from all chat groups</Text>
            <Text>-Delete your message history on this phone</Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    onPress={deleteAccount}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Delete Account</Text>
                </TouchableOpacity>
               </View>
          

        </View>
    )
};

export default Account

const styles = StyleSheet.create({
    container: {
        margin: 15,
        justifyContent: "flex-start",
        marginTop:240,
        marginLeft:55,
      //  alignItems: "center",
        //flexDirection: "row",
        width: "90%",
    
      },
    title: {
        fontSize:30,
    },

    titleText:{
        fontSize:20,
        marginTop:20,
    },
    buttonContainer:{
      width: '60%',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:40,
      marginLeft:20
   },
    buttonText:{
      color: 'white',
     fontWeight: '700',
      fontSize: 16,
   },
    button:{
     backgroundColor: '#cd9bf1',
     width: '100%',
      padding: 15,
     borderRadius: 10,
      alignItems: 'center',
    },
});
