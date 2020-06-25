import React from 'react';
import { useDispatch } from 'react-redux';
import CreateTaskView from '../../../common/components/create-task';
import { createTask } from '../../state/reducers/tasks';

const CreateTask = () => {
    const dispatch = useDispatch();

    const onCreate = (id, name) => dispatch(createTask({ id, name }));

    return <CreateTaskView onCreate={onCreate} />;
};

export default CreateTask;
