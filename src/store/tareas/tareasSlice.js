import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    completas: [],
    pendientes: []
}

export const tareasSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

    },
})

// Action creators are generated for each case reducer function
export const { } = tareasSlice.actions

export default tareasSlice.reducer