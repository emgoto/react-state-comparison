import React from 'react';
import { useDispatch } from 'react-redux';
import CreateTaskView from '../../../common/components/create-task';

const CreateTask = () => {
    const dispatch = useDispatch();

    const onCreate = (id, name) =>
        dispatch({ type: 'createTask', payload: { id, name } });

    return <CreateTaskView onCreate={onCreate} />;
};

export default CreateTask;
