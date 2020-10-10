import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import Task from '../task';
import { StoreContext } from '../../state/store';
import TasksView from '../../../common/components/tasks';

const Tasks = observer(() => {
    const {
        tasksStore: { tasks }
    } = useContext(StoreContext);

    return <TasksView Task={Task} tasks={tasks} />;
});

export default Tasks;
