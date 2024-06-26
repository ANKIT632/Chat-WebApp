import {configureStore} from '@reduxjs/toolkit';
import themeSliceReducer from './themeSlice';

export default configureStore({

    reducer:{
     themeKey:themeSliceReducer,
    }
});