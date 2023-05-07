import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from '../drawer/DrawerNavigator';
import AgregarTarea from '../../screens/agregar/AgregarTarea';
import { useSelector } from 'react-redux';
import Registro from '../../screens/registro/Registro';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {

    const usuario = useSelector((state: RootState) => state.usuario.activo)

    return (
        <Stack.Navigator>
            {
                usuario
                    ?
                    <>
                        <Stack.Screen options={{ headerShown: false }} name="drawer" component={DrawerNavigator} />
                        <Stack.Screen options={{ headerShown: false }} name="agregar-tarea" component={AgregarTarea} />
                    </>
                    :
                    <Stack.Screen options={{ headerShown: false }} name="registro" component={Registro} />

            }
        </Stack.Navigator>
    )
}

export default StackNavigator