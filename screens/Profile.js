import { browserPopupRedirectResolver } from 'firebase/auth';
import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert} from 'react-native'
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import profilePic from '../assets/profile.png';
import notificationPic from '../assets/notification.png'
import privacyPic from '../assets/privacy.png'
import contactPic from '../assets/contact.png'
import accountPic from '../assets/account.png'

const Home = ({navigation}) => {
    return (
        <View>
            <Image source ={profilePic} style={{width: 100, height: 100}}/>
            <Text>      Joe P</Text>
           
            <Text>               
             ____________________________________________________
            </Text>
            
            <View style={styles.button}>
            <Image source ={notificationPic} style={{width: 60, height: 70}}/>
            <Button style={styles.buttonText} onPress={() => navigation.navigate("Notifications")}
             title="    Notifications" 
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
            <Image source ={accountPic} style={{width: 60, height: 60}}/>
            <Button 
             onPress={() => navigation.navigate('Account')}
             title="    Account"
             color ="black"
              />
            </View>

        </View>
    )
}

export default Home

const styles = StyleSheet.create({
            button:{
                color:"purple",
                paddingHorizontal: 32,
                paddingVertical: 12,
                marginTop: 7,
                marginRight:100,
                flexDirection: 'row',
                marginBottom: 7
            }
            

})

