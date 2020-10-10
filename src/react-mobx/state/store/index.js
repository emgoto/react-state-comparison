import React, { createContext } from 'react';
import ListName from '../listName';
import Tasks from '../tasks';

class Store {
    constructor() {
        this.listNameStore = new ListName(this);
        this.tasksStore = new Tasks(this);
    }
}

export const StoreContext = createContext();

const TasksProvider = ({ children }) => (
    <StoreContext.Provider value={new Store()}>
        {children}
    </StoreContext.Provider>
);

export default TasksProvider;
