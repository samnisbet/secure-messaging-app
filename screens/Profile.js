import { browserPopupRedirectResolver } from 'firebase/auth';
import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, Image, Button, SafeAreaView, Alert} from 'react-native'
//import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import { getAuth, signOut } from "firebase/auth";
import * as ImagePicker from 'expo-image-picker';
import Icon from 'react-native-vector-icons/FontAwesome';

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
           <View style={styles.profileIcon}>
              <Image source={require("../assets/profile-icon.jpeg")} style={styles.imageselected} size={30} ></Image>   
           </View>
           
             {image && <Image source={{ uri: image }} style={{ width: 120, height: 100, left: 30, borderRadius:60, borderWidth:1, }} />}
             <Text style={styles.nameL}>Joe P</Text>
            </View>


            <Button title="Edit Profile Photo" onPress={SelectImage} />
           
        
            {/* <Image source ={profilePic} style={{width: 100, height: 100}}/> */}
           
            <Text>               
             ____________________________________________________
            </Text>

            <View style={styles.button}>
            <Icon name="home" size={60} color="black" />
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
            <Icon name="lock" size={60} color="black" />
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
            <Icon name="envelope" size={50} color="black" />
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
            <Icon name="bell" size={50} color="black" />
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
                marginTop: 16,
                marginRight:100,
                flexDirection: 'row',
                marginBottom: 7
            },
            nameL:{
                fontSize:30,
                marginLeft:30,
                marginTop:30,
            },
          
            profile:{
                flexDirection: "row",
            },
            profileIcon:{
              width: 100,
              height: 100,
              borderRadius: 100,
              bottom: -10,
              overflow: "hidden",
              backgroundColor: "grey",
              marginLeft:20,
            
            },

  imageselected:{
   
    flex: 1,
    width: undefined,
    height: undefined,
  

 },
        

})

