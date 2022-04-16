import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';
import Privacy from '../screens/Privacy';
import Contact from '../screens/Contact';
import Account from '../screens/Account';


const ProfileStack = createStackNavigator();

const StackProfile = () => {
    return (
        <ProfileStack.Navigator>

        <ProfileStack.Screen name = "Profile" component = {Profile} options = {{headerShown: false}} />
        <ProfileStack.Screen name = "Notifications" component = {Notifications} options = {{headerTitle: () => null}} />
        <ProfileStack.Screen name = "Privacy" component = {Privacy} options = {{headerTitle: () => null}} />
        <ProfileStack.Screen name = "Contact" component = {Contact} options = {{headerTitle: () => null}} />
        <ProfileStack.Screen name = "Account" component = {Account} options = {{headerTitle: () => null}} />
        
        </ProfileStack.Navigator>
    );
};

export default StackProfile;