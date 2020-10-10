import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../state/store';
import CreateTaskView from '../../../common/components/create-task';

const CreateTask = observer(() => {
    const {
        tasksStore: { createTask }
    } = useContext(StoreContext);

    const onCreate = (id, name) => createTask(id, name);

    return <CreateTaskView onCreate={onCreate} />;
});

export default CreateTask;
