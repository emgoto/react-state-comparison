import { createSlice } from '@reduxjs/toolkit';
import { initialTasks as initialState } from '../../../../common/mocks';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        createTask: (tasks, action) => {
            const { id, name } = action.payload;
            tasks[id] = { id, name, checked: false };
            return tasks;
        },
        updateTaskName: (tasks, action) => {
            const { id, name } = action.payload;
            tasks[id].name = name;
            return tasks;
        },
        updateTaskChecked: (tasks, action) => {
            const { id, checked } = action.payload;
            tasks[id].checked = checked;
            return tasks;
        },
        deleteTask: (tasks, action) => {
            const { id } = action.payload;
            delete tasks[id];
            return tasks;
        }
    }
});

export const {
    actions: { createTask, updateTaskName, updateTaskChecked, deleteTask }
} = tasksSlice;
export default tasksSlice.reducer;
