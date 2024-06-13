import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
    name:'searchResult',
    initialState: {
        searchData:[],
    },
    reducers: {
        addSearchResultData: (state,action) => {
            state.searchData.push(action.payload)
        },
        clearSearchResult: (state) => {
            state.searchData.length = 0;
        }
    }
})

export const { addSearchResultData, clearSearchResult } = searchResultSlice.actions;
export default searchResultSlice.reducer;