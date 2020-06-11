import React, { useContext } from 'react';
import NameView from '../../../common/components/name';
import { TasksContext } from '../../state/store';

const Name = () => {
    const {
        dispatch,
        state: { listName }
    } = useContext(TasksContext);

    const onSetName = (name) =>
        dispatch({ type: 'updateListName', payload: { name } });

    return <NameView name={listName} onSetName={onSetName} />;
};

export default Name;
