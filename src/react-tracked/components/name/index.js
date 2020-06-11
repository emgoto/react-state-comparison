import React from 'react';
import NameView from '../../../common/components/name';
import { useTracked } from '../../state/store';

const Name = () => {
    const [state, dispatch] = useTracked();

    const onSetName = (id, name) =>
        dispatch({ type: 'updateListName', payload: { name } });

    return <NameView name={state.listName} onSetName={onSetName} />;
};

export default Name;
