import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentAdmin:null,
    error:null,
    loading:false 
}


const adminSlice=createSlice({
    name:'admin',
    initialState,
    reducers:{
        loginStart:(state)=>{
            state.loading=true
        },
        loginSuccess:(state,action)=>{
            state.currentAdmin=action.payload
            state.loading=false
            state.error=null 
        },
        loginFailiure:(state,action)=>{
            state.error=action.payload
            state.loading=false 
        },
        updateAdminStart:(state)=>{
            state.loading=true
        },
        updateAdminSuccess:(state,action)=>{
            state.currentAdmin=action.payload
            state.loading=false
            state.error=null 
        },
        updateAdminFailiure:(state,action)=>{
            state.error=action.payload
            state.loading=false 
        },
        signOutAdminStart:(state)=>{
            state.loading=true
        },
        signOutAdminSuccess:(state,action)=>{
            state.currentAdmin=null
            state.loading=false
            state.error=null 
        },
        signOutAdminFailiure:(state,action)=>{
            state.error=action.payload
            state.loading=false 
        }

    }
})


export const {loginStart,loginFailiure,loginSuccess,updateAdminStart,updateAdminFailiure,updateAdminSuccess,signOutAdminSuccess,signOutAdminStart,signOutAdminFailiure}=adminSlice.actions
export default adminSlice.reducer