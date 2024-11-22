import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    list: [],
};

const companySlice = createSlice({
    name: "list",
    initialState,
    reducers: {
        addList: (state, action) => {
            state.list.push(action.payload);
        },

    },
});

export const { addList } = companySlice.actions;

export default companySlice.reducer;