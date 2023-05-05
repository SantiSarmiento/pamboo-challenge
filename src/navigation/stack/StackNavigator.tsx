import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from '../drawer/DrawerNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="drawer" component={DrawerNavigator} />
        </Stack.Navigator>
    )
}

export default StackNavigator