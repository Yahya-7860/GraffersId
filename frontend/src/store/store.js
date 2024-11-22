import { configureStore } from "@reduxjs/toolkit";
import listReducer from '../slice/companySlice'

const store = configureStore({
    reducer: {
        list: listReducer
    },
});

export default store;