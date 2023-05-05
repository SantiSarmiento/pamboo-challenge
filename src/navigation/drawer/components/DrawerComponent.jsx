import React from "react";
import { Box } from "native-base";
import { StyleSheet } from "react-native"


const DrawerComponent = ({ state }) => {

    return (
        <Box style={styles.container}>
        </Box>
    )
}

export default DrawerComponent

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-between",
        height: '100%',
        backgroundColor: "white",
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20
    }
})