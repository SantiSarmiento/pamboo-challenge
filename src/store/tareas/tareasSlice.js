import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tareas: []
}

export const tareasSlice = createSlice({
    name: 'tareas',
    initialState,
    reducers: {
        agregarTarea: (state, action) => {
            state.tareas = [...state.tareas, action.payload]
        },
        modificarEstado: (state, action) => {
            const tareaNombre = action.payload.nombre;
            const estado = action.payload.estado;
            const tareaEncontrada = state.tareas.find(tarea => tarea.nombre.toLowerCase() === tareaNombre.toLowerCase());
            if (tareaEncontrada) {
                console.log(tareaEncontrada)
                tareaEncontrada.estado = estado;
            }
        },
    },
})

export const { agregarTarea, modificarEstado } = tareasSlice.actions

export default tareasSlice.reducer