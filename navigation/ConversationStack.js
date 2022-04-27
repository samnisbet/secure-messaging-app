import { createStackNavigator } from '@react-navigation/stack';
import Chat from '../screens/Chat'
import Home from '../screens/Home'

const ConversationStack = createStackNavigator();

const StackConversation = () => {
    return(
        <ConversationStack.Navigator>
             <ConversationStack.Screen name ="Home" component= {Home} options={{headerShown: false}}/>
             <ConversationStack.Screen name = "Chat" component = {Chat} options= {{headerTitle: () => null}}/>
        </ConversationStack.Navigator>
    );
};

export default StackConversation;