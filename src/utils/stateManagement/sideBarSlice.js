import { createSlice } from "@reduxjs/toolkit";

const sidebarSlice = createSlice({
    name:'side-bar',
    initialState:{
        showSideBar: true
    },
    reducers:{
        toggleSideBar: (state) => {
            state.showSideBar = !state.showSideBar
        },
        closeSideBar: (state) => {
            state.showSideBar = false
        }
    }
})

export const { toggleSideBar, closeSideBar } = sidebarSlice.actions
export default sidebarSlice.reducer;