import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from './sideBarSlice';
import searchReducer from './searchSlice';
import liveChatReducer from './liveChatSlice';
import searchResultReducer from './searchresultSlice';


const appStore = configureStore(
    {
        reducer: {
            sideBar: sideBarReducer,
            search: searchReducer,
            liveChat: liveChatReducer,
            searchResult: searchResultReducer,
        }
    }
)

export default appStore