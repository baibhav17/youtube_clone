import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
    name: 'liveChat',
    initialState: {
        liveChatData:[]
    },
    reducers:{
        addChatData: (state, action)=> {
            if(state.liveChatData.length > 19){
                state.liveChatData.splice(0,3)
            }
            state.liveChatData.push(action.payload)
        },
        clearChatData: (state)=> {
            state.liveChatData.length = 0
        }
    }
})

export const {addChatData, clearChatData} = liveChatSlice.actions;
export default liveChatSlice.reducer;