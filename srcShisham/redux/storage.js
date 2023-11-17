import { configureStore } from '@reduxjs/toolkit'  //1st step
import appReducer from './appReducer/appReducer'


export const storage = configureStore({
  reducer: {
    appReducer : appReducer
  },
})