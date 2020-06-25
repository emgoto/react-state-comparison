import { createSlice } from '@reduxjs/toolkit';

const listNameSlice = createSlice({
    name: 'listName',
    initialState: 'My to-do list',
    reducers: {
        updateListName: (state, action) => {
            const { name } = action.payload;
            return name;
        }
    }
});

export const {
    actions: { updateListName }
} = listNameSlice;

export default listNameSlice.reducer;
