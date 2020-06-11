const initialTasks = {
    '1': {
        id: '1',
        name: 'Task number one',
        checked: true
    },
    '2': {
        id: '2',
        name: 'Task number Two',
        checked: false
    },
    '3': {
        id: '3',
        name: 'Task number three',
        checked: false
    }
};

export const initialState = {
    listName: 'My to-do list',
    tasks: initialTasks
};
