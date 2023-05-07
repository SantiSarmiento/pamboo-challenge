import React, { useState, useEffect } from "react";
import { Box, Text, View } from "native-base";
import { StyleSheet } from "react-native"
import { naranja_claro, naranja_oscuro } from "../../../helpers/Colors";
import { drawerScreens } from "./DrawerScreens";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';

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
            <TouchableOpacity onPress={() => navigation.navigate("tareas")}>
                <View style={selectedScreen === "" ? styles.selected_items_list : styles.items_list}>
                    <Text fontSize={"lg"} color={selectedScreen === "" ? "white" : "black"}>{capitalizeFirstLetter("Home")}</Text>
                </View>
            </TouchableOpacity>
            {
                drawerScreens.map((item, index) => {
                    return (
                        <TouchableOpacity key={index} onPress={() => navigation.navigate(item.name)}>
                            <View key={index} style={selectedScreen === item.name ? styles.selected_items_list : styles.items_list}>
                                <Text fontSize={"lg"} color={selectedScreen === item.name ? "white" : "black"}>{capitalizeFirstLetter(item.name)}</Text>
                            </View>
                        </TouchableOpacity>

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
        backgroundColor: naranja_oscuro,
        padding: 15
    },

})