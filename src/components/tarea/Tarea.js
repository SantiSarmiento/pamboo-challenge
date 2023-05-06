import React from "react"
import { Checkbox, HStack, Text } from "native-base"
import { useSelector, useDispatch } from 'react-redux';
import { modificarEstado } from "../../store/tareas/tareasSlice";

const Tarea = ({ nombre, estado }) => {

    const dispatch = useDispatch()

    const modificarEstadoTarea = () => {
        if (estado === 0) {
            dispatch(modificarEstado({ nombre: nombre, estado: 1 }))
        } else {
            dispatch(modificarEstado({ nombre: nombre, estado: 0 }))
        }
    }

    return (
        <HStack bgColor={estado === 1 ? "#ffefbe" : "#f4f4f4"} p={5} w={"90%"} alignItems={"center"} m={3}>
            <Checkbox defaultIsChecked={estado === 1 ? true : false} value={estado} accessibilityLabel={nombre} colorScheme={"yellow"} onChange={modificarEstadoTarea} />
            <Text ml={4} fontSize={"lg"} strikeThrough={estado === 1 ? true : false}>{nombre}</Text>
        </HStack>
    )
}

export default Tarea