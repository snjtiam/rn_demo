import { createSlice } from '@reduxjs/toolkit'

const initialState={
    darkMode : false,
}
export const appReducer = createSlice({
    name:'appReducer',
    initialState: initialState,
    reducers: {
        toggleTheme: (state, action)=>{
            state.darkMode= action.payload;
        }
    }
})

export const {toggleTheme} = appReducer.actions;  
export default appReducer.reducer;