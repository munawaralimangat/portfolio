import { createSlice } from "@reduxjs/toolkit";

export const resumeSlice = createSlice({
    name:'resume',
    initialState:{
        value:null
    },
    reducers:{
        setResume:(state,action)=>{
            state.value = action.payload
        }
    }
})

export default resumeSlice.reducer
export const {setResume} = resumeSlice.actions