import React, { useEffect, useState } from "react"
import { Checkbox, HStack, Text } from "native-base"
import { useDispatch } from 'react-redux';
import { modificarEstado } from "../../store/tareas/tareasSlice";

const Tarea = ({ nombre, estado, favorito }) => {

    const dispatch = useDispatch()

    const [info, setInfo] = useState({
        nombre: nombre,
        estado: estado,
        favorito: favorito
    })

    const modificarEstadoTarea = () => {
        console.log(info)
        if (info.estado === 0) {
            dispatch(modificarEstado({ nombre: info.nombre, estado: 1 }))
        } else {
            dispatch(modificarEstado({ nombre: info.nombre, estado: 0 }))
        }
    }

    useEffect(() => {
        setInfo({
            nombre: nombre,
            estado: estado,
            favorito: favorito
        })
    }, [nombre, estado, favorito])

    return (
        <HStack bgColor={estado === 1 ? "#BEFBCE" : "#f4f4f4"} p={5} w={"90%"} alignItems={"center"} m={3}>
            <Checkbox isChecked={info.estado === 1} value={info.estado} accessibilityLabel={info.nombre} colorScheme={"green"} onChange={modificarEstadoTarea} />
            <Text ml={4} fontSize={"lg"} strikeThrough={estado === 1 ? true : false}>{info.nombre}</Text>
        </HStack>
    )
}

export default Tarea