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
        borrarDefinitivo: (state, action) => {
            const tareaNombre = action.payload;
            state.borradas = state.borradas.filter(
                (tarea) => tarea.nombre.toLowerCase() !== tareaNombre.toLowerCase()
            );
        },
        recuperar: (state, action) => {
            const tareaNombre = action.payload;
            const tareaRecuperada = state.borradas.find(
                (tarea) => tarea.nombre.toLowerCase() === tareaNombre.toLowerCase()
            );

            if (tareaRecuperada) {
                state.borradas = state.borradas.filter(
                    (tarea) => tarea.nombre.toLowerCase() !== tareaNombre.toLowerCase()
                );
                state.tareas = [...state.tareas, tareaRecuperada];
            }
        },
        eliminarTodo: (state) => {
            state.tareas = []
            state.borradas = []
        }
    },
})

export const { agregarTarea, modificarEstado, borrarTarea, borrarDefinitivo, recuperar, eliminarTodo } = tareasSlice.actions

export default tareasSlice.reducer