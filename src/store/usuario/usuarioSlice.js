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
    },
})

export const { guardarUsuario } = usuarioSlice.actions

export default usuarioSlice.reducer