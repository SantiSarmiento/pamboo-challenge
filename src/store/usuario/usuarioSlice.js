import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    nombre: "",
    foto: "",
    activo: false
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
        },
    },
})

export const { guardarUsuario, eliminarUsuario } = usuarioSlice.actions

export default usuarioSlice.reducer