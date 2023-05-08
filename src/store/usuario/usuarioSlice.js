import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nombre: "",
    foto: "",
    activo: false,
    primera_vez: true
}

export const usuarioSlice = createSlice({
    name: 'usuario',
    initialState,
    reducers: {
        guardarUsuario: (state, action) => {
            state.nombre = action.payload.nombre
            state.foto = action.payload.foto
            state.activo = true
        },
        eliminarUsuario: (state) => {
            state.nombre = ""
            state.foto = ""
            state.activo = false
            state.primera_vez = true
        },
        desactivarInformacion: (state) => {
            state.primera_vez = false
        }
    },
})

export const { guardarUsuario, eliminarUsuario, desactivarInformacion } = usuarioSlice.actions

export default usuarioSlice.reducer