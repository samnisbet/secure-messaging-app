import { browserPopupRedirectResolver } from 'firebase/auth';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, Button, SafeAreaView, Alert} from 'react-native'
//import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import profilePic from '../assets/profile.png';
import notificationPic from '../assets/notification.png'
import privacyPic from '../assets/privacy.png'
import contactPic from '../assets/contact.png'
import accountPic from '../assets/account.png'
import { getAuth, signOut } from "firebase/auth";
import * as ImagePicker from 'expo-image-picker';

function clickLogout() {
    navigation.navigate('Login')
    const auth = getAuth();
    signOut(auth).then(() => {
        //signed out
    }).catch((error) => {
        //error
    })
}


const Profile = ({navigation}) => {
    const [image, setImage] = useState(null);
 


    const SelectImage = async () => {
        let photo = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });

  console.log(photo);

  if (!photo.cancelled) {
    setImage(photo.uri);
  }
};
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.profile}>
             {image && <Image source={{ uri: image }} style={{ width: 120, height: 110, left: 30, borderRadius:60, borderWidth:1, }} />}
             <Text style={styles.nameL}>Joe P</Text>
            </View>
            <Button style={styles.bu} title="Edit Profile Photo" onPress={SelectImage} />
           
        
            {/* <Image source ={profilePic} style={{width: 100, height: 100}}/> */}
           
            <Text>               
             ____________________________________________________
            </Text>

            <View style={styles.button}>
            <Image source ={accountPic} style={{width: 70, height: 70}}/>
            <Button 
             onPress={() => navigation.navigate('Account')}
             title="    Account"
             color ="black"
              />
            </View>

            <Text>               
             ____________________________________________________
            </Text>
            
            <View style={styles.button}>
            <Image source ={privacyPic} style={{width: 70, height: 70}}/>
            <Button 
             onPress={() => navigation.navigate('Privacy')}
             title="  Privacy"
             color ="black"
              />
            </View>

            <Text>               
             ____________________________________________________
            </Text>

            <View style={styles.button}>
            <Image source ={contactPic} style={{width: 70, height: 70}}/>
            <Button 
             onPress={() => navigation.navigate('Contact')}
             title="  Contact Us"
             color ="black"

              />
            </View> 
            
            <Text>               
             ____________________________________________________
            </Text>

            <View style={styles.button}>
            <Image source ={notificationPic} style={{width: 70, height: 70}}/>
            <Button style={styles.buttonText} onPress={() => navigation.navigate("Notifications")}
             title="    Notifications" 
             color ="black"
             
             />
            </View> 


     
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({
            container: {
            flex: 1
            },
            button:{
                color:"purple",
                paddingHorizontal: 32,
                paddingVertical: 12,
                marginTop: 7,
                marginRight:100,
                flexDirection: 'row',
                marginBottom: 7
            },
            nameL:{
                fontSize:30,
                marginLeft:60,
                marginTop:10,
            },
            bu:{
                marginLeft:70,


            },
            profile:{
                flexDirection: "row",
            }
        

})

