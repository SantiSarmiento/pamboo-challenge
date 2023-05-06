import React from "react"
import { Checkbox, HStack, Text, VStack } from "native-base"
import { useDispatch } from 'react-redux';
import { modificarEstado } from "../../store/tareas/tareasSlice";
import { completadas } from "../../helpers/Colors";

const Tarea = ({ nombre, estado, descripcion, fecha, hora }) => {

    const dispatch = useDispatch()

    const modificarEstadoTarea = () => {
        dispatch(modificarEstado({ nombre: nombre, estado: estado === 0 ? 1 : 0, descripcion: descripcion, fecha: fecha, hora: hora }))
    }

    function capitalizar(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    return (
        <HStack bgColor={estado === 1 ? completadas : "#f4f4f4"} p={2} w={"90%"} alignItems={"center"} m={2}>
            <Checkbox isChecked={estado === 1} value={estado} accessibilityLabel={nombre} colorScheme={"green"} onChange={modificarEstadoTarea} />
            <VStack>
                <Text ml={3} fontSize={"md"} fontWeight={"medium"} strikeThrough={estado === 1 ? true : false}>{capitalizar(nombre)}</Text>
                <Text ml={4} fontSize={"sm"} pr={2} >{descripcion !== "" ? capitalizar(descripcion) : "-"}</Text>
            </VStack>
            <Text position={"absolute"} right={2} top={2} color={"gray.400"}>{hora}</Text>
        </HStack>
    )
}

export default Tarea