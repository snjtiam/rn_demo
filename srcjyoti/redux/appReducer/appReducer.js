import { createSlice } from '@reduxjs/toolkit'

const initialState={
    darkMode : false,
}
export const appReducer = createSlice({
    name:'appReducer',
    initialState: initialState,
    reducers: {
        toggleMode: (state, action)=>{
            state.darkMode= action.payload;
        }
    }
})

export const {toggleMode} = appReducer.actions;  // automatically creates action
export default appReducer.reducer;
