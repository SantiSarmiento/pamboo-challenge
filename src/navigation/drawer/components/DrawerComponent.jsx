import React, { useState, useEffect } from "react";
import { Box, Text, View } from "native-base";
import { StyleSheet } from "react-native"
import { naranja_claro, naranja_oscuro } from "../../../helpers/Colors";
import { drawerScreens } from "./DrawerScreens";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import CustomAvatars from "../../../components/avatar/CustomAvatar";
import { eliminarUsuario } from "../../../store/usuario/usuarioSlice";
import { eliminarTodo } from "../../../store/tareas/tareasSlice";
import CustomModal from "../../../components/modal/CustomModal";
import CustomButton from "../../../components/button/CustomButton";

const CerrarSesion = ({ closeModal }) => {
    const dispatch = useDispatch();

    const confirmar = () => {
        dispatch(eliminarUsuario())
        dispatch(eliminarTodo())
        closeModal()
    }

    return (
        <View>
            <Text fontSize={"md"} mb={5}>Si lo hace, perder toda su información.</Text>
            <CustomButton
                titulo={"Confirmar"}
                callBack={confirmar}
                disabled={false}
            />
        </View>
    )
}

const DrawerComponent = ({ state }) => {

    const usuario = useSelector((state) => state.usuario)
    const navigation = useNavigation()
    const [selectedScreen, setSelectedScreen] = useState("")
    const [showModal, setShowModal] = useState(false)

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
            <View flex={1}>
                <View style={styles.user}>
                    <CustomAvatars size={"xl"} imagen={usuario.foto ? usuario.foto : "https://definicion.de/wp-content/uploads/2019/07/perfil-de-usuario.png"} />
                    <Text fontSize={"xl"} fontWeight={"medium"} color={"white"}>{capitalizeFirstLetter(usuario.nombre)}</Text>

                </View>
                <TouchableOpacity onPress={() => navigation.navigate("tareas")}>
                    <View style={selectedScreen === "" ? styles.selected_items_list : styles.items_list}>
                        <Text fontSize={"lg"} >{capitalizeFirstLetter("Home")}</Text>
                    </View>
                </TouchableOpacity>
                {
                    drawerScreens.map((item, index) => {
                        return (
                            <TouchableOpacity key={index} onPress={() => navigation.navigate(item.name)}>
                                <View key={index} style={selectedScreen === item.name ? styles.selected_items_list : styles.items_list}>
                                    <Text fontSize={"lg"} >{capitalizeFirstLetter(item.name)}</Text>
                                </View>
                            </TouchableOpacity>

                        )
                    })
                }
            </View>
            <TouchableOpacity onPress={() => setShowModal(true)}>
                <Text fontSize={"lg"} p={15} >Cerrar sesión</Text>
            </TouchableOpacity>
            <CustomModal showModal={showModal} close={() => setShowModal(false)} titulo={"¿Desea cerrar sesión?"} children={<CerrarSesion closeModal={() => setShowModal(false)} />} />
        </Box>
    )
}

export default DrawerComponent

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        backgroundColor: "white",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20
    },
    user: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "space-around",
        height: '20%',
        borderTopRightRadius: 20,
        backgroundColor: naranja_oscuro,
        padding: 10
    },
    items_list: {
        backgroundColor: 'white',
        padding: 15
    },
    selected_items_list: {
        backgroundColor: naranja_claro,
        padding: 15
    },

})