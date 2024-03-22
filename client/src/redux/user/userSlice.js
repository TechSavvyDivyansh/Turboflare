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
        },
        updateUserStart:(state)=>{
            state.loading=true
        },
        updateUserSuccess:(state,action)=>{
            state.currentUser=action.payload
            state.loading=false
            state.error=null 
        },
        updateUserFailiure:(state,action)=>{
            state.error=action.payload
            state.loading=false 
        },
        signOutUserStart:(state)=>{
            state.loading=true
        },
        signOutUserSuccess:(state,action)=>{
            state.currentUser=null
            state.loading=false
            state.error=null 
        },
        signOutUserFailiure:(state,action)=>{
            state.error=action.payload
            state.loading=false 
        }

    }
})


export const {loginStart,loginFailiure,loginSuccess,updateUserStart,updateUserFailiure,updateUserSuccess,signOutUserSuccess,signOutUserStart,signOutUserFailiure}=userSlice.actions
export default userSlice.reducer