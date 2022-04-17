import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Contacts from '../screens/Contacts';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name= "Conversations" component={Home} 
            options={{
                tabBarIcon: ({size, color}) => (<Icon name={"envelope"} color={color} size={size} />)
            }}
            />
            <Tab.Screen 
            name= "Profile" component={Profile} 
            options={{
                tabBarIcon: ({size, color}) => (<Icon name={"user"} color={color} size={size} />)
            }}
            />
            <Tab.Screen 
            name= "Contacts" component={Contacts} 
            options={{
                tabBarIcon: ({size, color}) => (<Icon name={"address-book"} color={color} size={size} />)
            }}
            />
        </Tab.Navigator>
    )
}

export default Tabs;