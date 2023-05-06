import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerComponent from './components/DrawerComponent';
import BottomStack from '../bottomStack/BottomStack';

const Drawer = createDrawerNavigator()

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator

            screenOptions={{
                drawerStyle: { backgroundColor: 'transparent' }
            }}
            drawerContent={props => <DrawerComponent {...props} />}
        >
            <Drawer.Screen name='bottom-stack' options={{ headerShown: false }} component={BottomStack} />
            {/* {
                drawerNavigation.map((item, index) => {
                    return (
                        <Stack.Screen key={index} options={{ headerShown: false }} name={item.name} component={item.component} />
                    )
                })
            } */}
        </Drawer.Navigator>
    )
}

export default DrawerNavigator