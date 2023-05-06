import React, { useState } from "react"
import { Input } from "native-base"
import { useSelector, useDispatch } from 'react-redux';

const AgregarTarea = () => {


    const dispatch = useDispatch()
    const tareas = useSelector(state => state.tareas.tareas)

    console.log("soy yoo", tareas)

    const [nuevaTarea, setNuevaTarea] = useState({
        nombre: "",
        estado: 0,
        favorito: 0
    })

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
                focusOutlineColor={"yellow.500"}
                bgColor={"white"}
            />
        </>
    )
}

export default AgregarTarea