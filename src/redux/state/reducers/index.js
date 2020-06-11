import { initialState } from '../../../common/mocks';

const reducer = (state = initialState, action) => {
    const { name, tasks } = state;
    switch (action.type) {
        case 'CREATE_TASK': {
            const { id, name } = action.payload;
            return {
                name,
                tasks: { ...tasks, [id]: { id, name, checked: false } }
            };
        }
        case 'UPDATE_TASK_NAME': {
            const { id, name } = action.payload;
            const updatedTask = { ...tasks[id], name };
            return { name, tasks: { ...tasks, [id]: updatedTask } };
        }
        case 'UPDATE_TASK_CHECKED': {
            const { id, checked } = action.payload;
            const updatedTask = { ...tasks[id], checked };
            return { name, tasks: { ...tasks, [id]: updatedTask } };
        }

        case 'DELETE_TASK': {
            const { id } = action.payload;
            const newTasks = { ...tasks };
            delete newTasks[id];
            return { name, tasks: newTasks };
        }

        default: {
            return state;
        }
    }
};

export default reducer;
