import React, { useState, useEffect } from "react";
import { Animated, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useIsFocused } from "@react-navigation/native";
import { Text } from 'native-base';

//screens
import { BottomScreens } from "./components/BottomScreens";

const BottomNavigator = createBottomTabNavigator()

const BottomStack = () => {

    return (
        <BottomNavigator.Navigator
            initialRouteName="tareas"
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    height: 68
                },
                headerShown: false
            }}
        >
            {
                BottomScreens.map(({ name, component }, index) => {
                    return (
                        <BottomNavigator.Screen
                            key={index}
                            name={name}
                            component={component}
                            options={{
                                tabBarIcon: () => {
                                    const navigation = useIsFocused()
                                    const [animation, setAnimation] = useState(new Animated.Value(0));
                                    const [selected, setSelected] = useState(false)

                                    useEffect(() => {
                                        setSelected(navigation)
                                    }, [navigation])

                                    const startAnimation = () => {
                                        Animated.timing(animation, {
                                            toValue: 1,
                                            duration: 300,
                                            useNativeDriver: false,
                                        }).start();
                                    }

                                    const backAnimation = () => {
                                        Animated.timing(animation, {
                                            toValue: 0,
                                            duration: 300,
                                            useNativeDriver: false,
                                        }).start();
                                    }

                                    useEffect(() => {
                                        if (selected === true) {
                                            startAnimation()
                                        } else {
                                            backAnimation()
                                        }
                                    }, [selected])

                                    const boxStyle = {
                                        backgroundColor: animation.interpolate({
                                            inputRange: [0, 1],
                                            outputRange: ['rgb(255,255,255)', 'rgb(198,209,217)'],
                                        }),
                                    };

                                    return (
                                        < Animated.View style={[styles.box, boxStyle]}>
                                            {/* <CustomIcon name={"casa"} size={"xs"} /> */}
                                            <Text textAlign={"center"} w={"100%"}>{name}</Text>
                                        </Animated.View>
                                    )
                                }
                            }}
                        />
                    )
                })
            }
        </BottomNavigator.Navigator >
    )
}

export default BottomStack

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
});