import React, { useState } from "react"
import { HStack, Input, Text } from "native-base"
import { useSelector, useDispatch } from 'react-redux';
import CustomButton from "../../../components/button/CustomButton";
import { agregarTarea } from "../../../store/tareas/tareasSlice";
import { titulos } from "../../../helpers/Colors";

const AgregarTarea = ({ close }) => {


    const dispatch = useDispatch()
    const tareas = useSelector(state => state.tareas.tareas)

    const [nuevaTarea, setNuevaTarea] = useState({
        nombre: "",
        estado: 0,
        favorito: 0
    })
    const [error, setError] = useState("")

    function buscarPorNombre() {
        for (let i in tareas) {
            if (tareas[i].nombre.toLowerCase() === nuevaTarea.nombre.toLowerCase()) {
                setError("Este nombre ya existe")
                return
            }
        }
        if (error !== "") setError("")
        agregarNuevaTarea()
        setNuevaTarea({
            nombre: "",
            estado: 0,
            favorito: 0
        })
        close()
    }

    const agregarNuevaTarea = () => {
        const res = dispatch(agregarTarea(nuevaTarea))
    }

    return (
        <>
            <Input
                value={nuevaTarea.nombre}
                onChangeText={(text) => setNuevaTarea({ ...nuevaTarea, nombre: text })}
                placeholder="Nombre de la tarea"
                fontSize={"lg"}

                //style
                focusOutlineColor={error !== "" ? "red.500" : titulos}
                borderColor={error !== "" ? "red.500" : "gray.400"}
                bgColor={"white"}
            />
            <Text textAlign={"center"} mt={1} color={"red.500"}>{error}</Text>
            <HStack justifyContent={"space-around"} mt={5}>
                <CustomButton titulo={"Cancelar"} callBack={close} />
                <CustomButton titulo={"Confirmar"} callBack={buscarPorNombre} disabled={nuevaTarea.nombre === ""} />
            </HStack>
        </>
    )
}

export default AgregarTarea