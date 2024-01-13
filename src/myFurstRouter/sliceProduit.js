import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"


export const getDatae=createAsyncThunk("getDatae/produit",async()=>{
    return await fetch(" http://localhost:6060/produit").then(res=>res.json())
  
  })
const sliceProduit=createSlice({
    name:"produit",
    initialState:{
        produit:[]
    },
    reducers:{
       

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getDatae.fulfilled,(state,action)=>{
          state.produit=action.payload
        })
    }
})
export const {changeSerch}=sliceProduit.actions;
export default sliceProduit.reducer


