import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentUser:null,
    error:null,
    loading:false 
}


const userSlice=createSlice({
    name:'user',
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.loading=true
        },
        loginSuccess:(state,action)=>{
            state.currentUser=action.payload
            state.loading=false
            state.error=null 
        },
        loginFailiure:(state,action)=>{
            state.error=action.payload
            state.loading=false 
        }

    }
})


export const {loginStart,loginFailiure,loginSuccess}=userSlice.actions
export default userSlice.reducer