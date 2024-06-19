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
        },
        login:(state,action)=>{ //login user
            state.user = action.payload;
        },
        removeAddress:(state,action)=>{ //remove address
            state.user.address = state.user.address.filter((address)=>address.id != action.payload)
        }
    },
   
})

export default authSlice.reducer
export const {logout,login,removeAddress} = authSlice.actions