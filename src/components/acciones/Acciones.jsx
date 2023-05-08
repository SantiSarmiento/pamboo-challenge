import React, { useState } from "react"
import { useNavigation } from "@react-navigation/native"
import { Actionsheet, AddIcon, CheckIcon, Icon, View } from "native-base"
import { naranja_oscuro } from "../../helpers/Colors"
import { TouchableOpacity } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons"
import { useDispatch } from "react-redux";
import { ordenarPorFecha, ordenarPorNombre } from "../../store/tareas/tareasSlice";

const Configuracion = ({ isOpen, onClose }) => {

    const [metodoSeleccionado, setMetodoSeleccionado] = useState(null)
    const dispatch = useDispatch()

    return (
        <Actionsheet isOpen={isOpen} onClose={onClose}>
            <Actionsheet.Content >
                <Actionsheet.Item onPress={() => { setMetodoSeleccionado(0), onClose(), dispatch(ordenarPorFecha()) }} bgColor={metodoSeleccionado === 0 && "gray.300"} >Ordenar por fecha</Actionsheet.Item>
                <Actionsheet.Item m={4} onPress={() => { setMetodoSeleccionado(1), onClose(), dispatch(ordenarPorNombre()) }} bgColor={metodoSeleccionado === 1 && "gray.300"}>Ordenar por nombre</Actionsheet.Item>
            </Actionsheet.Content>
        </Actionsheet>
    )
}

const Acciones = () => {

    const navigation = useNavigation()

    const [isOpen, setIsOpen] = useState(false)

    return (
        <View position={"absolute"} right={3} bottom={4}>

            <TouchableOpacity onPress={() => setIsOpen(true)}>
                <View bgColor={naranja_oscuro} p={1} mb={4}>
                    <Icon as={Ionicons} size={"xl"} name="settings-outline" color={"white"} />
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("agregar-tarea")}>
                <View bgColor={naranja_oscuro} p={1}>
                    <AddIcon size={"xl"} color={"white"} />
                </View>
            </TouchableOpacity>
            <Configuracion isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </View>
    )
}

export default Acciones