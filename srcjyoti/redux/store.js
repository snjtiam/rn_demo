import { configureStore } from '@reduxjs/toolkit'  //1st step
import appReducer from './appReducer/appReducer'


export const store = configureStore({
  reducer: {
    appReducer : appReducer
  },
})
