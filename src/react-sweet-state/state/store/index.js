import { createStore, createHook } from 'react-sweet-state';
import { initialState } from '../../../common/mocks';
import taskActions from '../actions/tasks';
import updateListName from '../actions/list-name';
import { tasksSelector, nameSelector } from '../selectors';

export const Store = createStore({
    initialState,
    actions: {
        updateListName,
        ...taskActions
    },
    name: 'TasksStore'
});

export const useTasks = createHook(Store, {
    selector: tasksSelector
});

export const useName = createHook(Store, {
    selector: nameSelector
});

export const useTaskActions = createHook(Store, {
    selector: null
});
