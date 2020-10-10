import { makeAutoObservable } from 'mobx';
import { initialState } from '../../../common/mocks';

class Tasks {
    tasks = initialState.tasks;

    constructor() {
        makeAutoObservable(this);
    }

    createTask = (id, name) =>
        (this.tasks = { ...this.tasks, [id]: { id, name, checked: false } });

    updateTaskName = (id, name) =>
        (this.tasks = { ...this.tasks, [id]: { ...this.tasks[id], name } });

    updateTaskChecked = (id, checked) =>
        (this.tasks = { ...this.tasks, [id]: { ...this.tasks[id], checked } });

    deleteTask = (id) => {
        const newTasks = { ...this.tasks };
        delete newTasks[id];
        this.tasks = newTasks;
    };
}

export default Tasks;
