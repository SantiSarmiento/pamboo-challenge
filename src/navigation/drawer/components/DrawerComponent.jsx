import React, { useState, useEffect } from "react";
import { Box, Pressable, Text, View } from "native-base";
import { StyleSheet } from "react-native"
import { naranja_claro, titulos } from "../../../helpers/Colors";
import { drawerScreens } from "./DrawerScreens";
import { useNavigation } from "@react-navigation/native";

const DrawerComponent = ({ state }) => {

    const navigation = useNavigation()
    const [selectedScreen, setSelectedScreen] = useState("")

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        if (state.index > 0) {
            setSelectedScreen(state.routeNames[state.index])
        } else {
            setSelectedScreen("")
        }
    }, [state])

    return (
        <Box style={styles.container}>
            <View style={styles.user}>

            </View>
            {
                drawerScreens.map((item, index) => {
                    return (
                        <View key={index} style={selectedScreen === item.name ? styles.selected_items_list : styles.items_list}>
                            <Pressable onPress={() => navigation.navigate(item.name)}>
                                <Text fontSize={"lg"} color={selectedScreen === item.name ? "white" : "black"}>{capitalizeFirstLetter(item.name)}</Text>
                            </Pressable>
                        </View>
                    )
                })
            }
        </Box>
    )
}

export default DrawerComponent

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    user: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        height: '20%',
        borderTopRightRadius: 20,
        backgroundColor: naranja_claro
    },
    items_list: {
        backgroundColor: 'white',
        padding: 15
    },
    selected_items_list: {
        backgroundColor: titulos,
        padding: 15
    },

})