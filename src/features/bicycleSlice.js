import { createSlice } from "@reduxjs/toolkit";

export const bicycleSlice = createSlice({
    name:'bicycle',
    initialState:{
        value:null
    },
    reducers:{
        setImage:(state,action)=>{
            state.value = action.payload
        }
    }
})

export default bicycleSlice.reducer
export const {setImage} = bicycleSlice.actions;