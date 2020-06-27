const createTask = (id, name) => ({ getState, setState }) => {
    const { tasks } = getState();
    setState({ tasks: { ...tasks, [id]: { id, name, checked: false } } });
};

const updateTaskName = (id, name) => ({ getState, setState }) => {
    const { tasks } = getState();
    const updatedTask = { ...tasks[id], name };
    setState({ tasks: { ...tasks, [id]: updatedTask } });
};

const updateTaskChecked = (id, checked) => ({ getState, setState }) => {
    const { tasks } = getState();
    const updatedTask = { ...tasks[id], checked };
    setState({ tasks: { ...tasks, [id]: updatedTask } });
};

const deleteTask = (id) => ({ getState, setState }) => {
    const { tasks } = getState();
    const newTasks = { ...tasks };
    delete newTasks[id];
    setState({ tasks: newTasks });
};

const taskActions = {
    createTask,
    updateTaskName,
    updateTaskChecked,
    deleteTask
};

export default taskActions;
