import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
    name:'searchCache',
    initialState:{},
    reducers:{
        addCacheSearch: (state, action)=>{
            // state= Object.assign(state, action.payload)

            // why this below line is not working
            // state= {...state,...action.payload}
            for(const e of Object.keys(action.payload)) {
                state[e]=action.payload[e]
            }
            // return {...state,...action.payload}
        }
    }
})

export const {addCacheSearch} = searchSlice.actions;
export default searchSlice.reducer;