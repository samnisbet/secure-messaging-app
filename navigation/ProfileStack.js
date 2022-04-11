import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../screens/Profile';
import Notifications from '../screens/Notifications';

const ProfileStack = createStackNavigator();

const StackProfile = () => {
    return (
        <ProfileStack.Navigator>

        <ProfileStack.Screen name = "Profile" component = {Profile} options = {{headerShown: false}} />
        <ProfileStack.Screen name = "Notifications" component = {Notifications} options = {{headerTitle: () => null}} />

        </ProfileStack.Navigator>
    );
};

export default StackProfile;