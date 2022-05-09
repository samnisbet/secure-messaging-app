import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {ListItem, Avatar} from "react-native-elements";


const CustomListItem = ({id, chatName, enterChat}) => {
  return (
    <ListItem onPress={() => enterChat(id, chatName)} key={id} bottomDivider>
    <Avatar
    rounded
    source={{
      uri:
    "https://placeimg.com/140/140/any"}}
    />
    <ListItem.Content>
      <ListItem.Title style ={{fontWeight: "600"}} >
      {/* <TouchableOpacity onPress={() => navigation.navigate("NewChat")}> */}
       {chatName}
        {/* {chatName} */}
      </ListItem.Title>
      <ListItem.Subtitle 
      numberOfLines={1} 
      ellipsizeMode ="tail">
          Hey
      </ListItem.Subtitle>
    </ListItem.Content>
  </ListItem>
  )
}

export default CustomListItem

const styles = StyleSheet.create({})