import { initialTasks as initialState } from '../../../../common/mocks';
import {
    CREATE_TASK,
    UPDATE_TASK_NAME,
    UPDATE_TASK_CHECKED,
    DELETE_TASK
} from '../../actions';

const reducer = (state = initialState, action) => {
    const tasks = state;
    switch (action.type) {
        case CREATE_TASK: {
            const { id, name } = action.payload;
            return { ...tasks, [id]: { id, name, checked: false } };
        }
        case UPDATE_TASK_NAME: {
            const { id, name } = action.payload;
            const updatedTask = { ...tasks[id], name };
            return { ...tasks, [id]: updatedTask };
        }
        case UPDATE_TASK_CHECKED: {
            const { id, checked } = action.payload;
            const updatedTask = { ...tasks[id], checked };
            return { ...tasks, [id]: updatedTask };
        }

        case DELETE_TASK: {
            const { id } = action.payload;
            const newTasks = { ...tasks };
            delete newTasks[id];
            return newTasks;
        }

        default: {
            return state;
        }
    }
};

export default reducer;
