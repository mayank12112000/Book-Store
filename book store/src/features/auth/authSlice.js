import {createSlice} from "@reduxjs/toolkit"
const initialState = {
    user:null,
    status:"idel", // idle loading succeeded failed
    error:null
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        logout:(state)=>{
            state.user = null; // logout reducer 
        }
    },
   
})

export default authSlice.reducer
export const {logout} = authSlice.actions