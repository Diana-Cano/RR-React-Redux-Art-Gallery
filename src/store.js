import { configureStore, MiddlewareArray } from '@reduxjs/toolkit'
import dataReducer from './ducks/dataSlice'
import { logger } from './ducks/middleware'
export const store = configureStore({
    reducer: {
        data: dataReducer
    },
    middleware: [ logger ]
})