import React from 'react';
import { useStoreActions } from 'easy-peasy';
import CreateTaskView from '../../../common/components/create-task';

const CreateTask = () => {
    const createTask = useStoreActions((actions) => actions.createTask);

    const onCreate = (id, name) => createTask({ id, name });

    return <CreateTaskView onCreate={onCreate} />;
};

export default CreateTask;
