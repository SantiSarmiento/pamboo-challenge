import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tareas: [],
    borradas: []
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
            const tareaEncontrada = state.tareas.find(tarea => tarea.nombre.toLowerCase() === tareaNombre.toLowerCase());
            if (tareaEncontrada) {
                tareaEncontrada.estado = action.payload.estado;
            }
        },
        borrarTarea: (state, action) => {
            const tareaNombre = action.payload;
            const tareaBorrada = state.tareas.find(
                (tarea) => tarea.nombre.toLowerCase() === tareaNombre.toLowerCase()
            );

            state.tareas = state.tareas.filter(
                (tarea) => tarea.nombre.toLowerCase() !== tareaNombre.toLowerCase()
            );
            state.borradas = [...state.borradas, tareaBorrada];

        },
    },
})

export const { agregarTarea, modificarEstado, borrarTarea } = tareasSlice.actions

export default tareasSlice.reducer