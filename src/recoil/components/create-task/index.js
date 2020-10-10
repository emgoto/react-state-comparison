import React from 'react';
import { useRecoilState } from 'recoil';
import tasksState from '../../state/tasks';
import CreateTaskView from '../../../common/components/create-task';

const CreateTask = () => {
    const [tasks, setTasks] = useRecoilState(tasksState);
    const onCreate = (id, name) =>
        setTasks({ ...tasks, [id]: { id, name, checked: false } });

    return <CreateTaskView onCreate={onCreate} />;
};

export default CreateTask;
