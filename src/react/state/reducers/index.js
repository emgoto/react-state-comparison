export const reducer = (state, action) => {
    const { listName, tasks } = state;
    switch (action.type) {
        case 'updateListName': {
            const { name } = action.payload;
            return { listName: name, tasks };
        }
        case 'createTask': {
            const { id, name } = action.payload;
            return {
                listName,
                tasks: { ...tasks, [id]: { id, name, checked: false } }
            };
        }
        case 'updateTaskName': {
            const { id, name } = action.payload;
            const updatedTask = { ...tasks[id], name };
            return { listName, tasks: { ...tasks, [id]: updatedTask } };
        }
        case 'updateTaskChecked': {
            const { id, checked } = action.payload;
            const updatedTask = { ...tasks[id], checked };
            return { listName, tasks: { ...tasks, [id]: updatedTask } };
        }

        case 'deleteTask': {
            const { id } = action.payload;
            const newTasks = { ...tasks };
            delete newTasks[id];
            return { listName, tasks: newTasks };
        }

        default: {
            return state;
        }
    }
};
