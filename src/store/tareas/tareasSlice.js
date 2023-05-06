import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    tareas: []
}

export const tareasSlice = createSlice({
    name: 'tareas',
    initialState,
    reducers: {
        agregarTarea: (state, action) => {
            console.log(action.payload)
        },
    },
})

export const { agregarTarea } = tareasSlice.actions

export default tareasSlice.reducer