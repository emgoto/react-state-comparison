import React from 'react';
import { useRecoilState } from 'recoil';
import taskNameState from '../../state/task-name';
import NameView from '../../../common/components/name';

const Name = () => {
    const [taskName, setTaskName] = useRecoilState(taskNameState);
    const onSetName = (name) => setTaskName(name);

    return <NameView name={taskName} onSetName={onSetName} />;
};

export default Name;
