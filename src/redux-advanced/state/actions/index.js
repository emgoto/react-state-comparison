// Actions
export const UPDATE_LIST_NAME = 'UPDATE_LIST_NAME';
export const CREATE_TASK = 'CREATE_TASK';
export const UPDATE_TASK_NAME = 'UPDATE_TASK_NAME';
export const UPDATE_TASK_CHECKED = 'UPDATE_TASK_CHECKED';
export const DELETE_TASK = 'DELETE_TASK';

// Action creators

export const updateListName = (name) => ({
    type: UPDATE_LIST_NAME,
    payload: { name }
});

export const createTask = (id, name) => ({
    type: CREATE_TASK,
    payload: { id, name }
});

export const updateTaskName = (id, name) => ({
    type: UPDATE_TASK_NAME,
    payload: { id, name }
});

export const updateTaskChecked = (id, checked) => ({
    type: UPDATE_TASK_CHECKED,
    payload: { id, checked }
});

export const deleteTask = (id) => ({
    type: DELETE_TASK,
    payload: { id }
});
