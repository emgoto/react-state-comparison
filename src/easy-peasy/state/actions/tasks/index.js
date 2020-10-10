import { action } from 'easy-peasy';

const createTask = action((state, { id, name }) => {
    state.tasks[id] = { id, name, checked: false };
});

const updateTaskName = action((state, { id, name }) => {
    state.tasks[id] = { ...state.tasks[id], name };
});

const updateTaskChecked = action((state, { id, checked }) => {
    state.tasks[id] = { ...state.tasks[id], checked };
});

const deleteTask = action((state, { id }) => {
    const newTasks = state.tasks;
    delete newTasks[id];
    state.tasks = newTasks;
});

const taskActions = {
    createTask,
    updateTaskName,
    updateTaskChecked,
    deleteTask
};

export default taskActions;
