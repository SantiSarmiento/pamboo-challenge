import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from '../drawer/DrawerNavigator';
import AgregarTarea from '../../screens/agregar/AgregarTarea';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen options={{ headerShown: false }} name="drawer" component={DrawerNavigator} />
            <Stack.Screen options={{ headerShown: false }} name="agregar-tarea" component={AgregarTarea} />
        </Stack.Navigator>
    )
}

export default StackNavigator