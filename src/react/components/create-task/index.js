import React, { useContext } from 'react';
import CreateTaskView from '../../../common/components/create-task';
import { TasksContext } from '../../state/store';

const CreateTask = () => {
    const { dispatch } = useContext(TasksContext);

    const onCreate = (id, name) =>
        dispatch({ type: 'createTask', payload: { id, name } });

    return <CreateTaskView onCreate={onCreate} />;
};

export default CreateTask;
