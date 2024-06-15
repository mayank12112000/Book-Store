import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./rootReducer"

const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware({
            serializableCheck:false // disable serializablity checks globaly
        })
})
export default store