import {configureStore} from '@reduxjs/toolkit';
import themeSliceReducer from './themeSlice';
import refreshSidebar from "./refreshSideBar";


export default configureStore({

    reducer:{
     themeKey:themeSliceReducer,
     refreshKey: refreshSidebar,
    }
});