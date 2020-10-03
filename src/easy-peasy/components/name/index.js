import React from 'react';
import { useStoreState, useStoreActions } from 'easy-peasy';
import NameView from '../../../common/components/name';

const Name = () => {
    const listName = useStoreState((state) => state.listName);
    const updateListName = useStoreActions((actions) => actions.updateListName);

    const onSetName = (name) => updateListName(name);

    return <NameView name={listName} onSetName={onSetName} />;
};

export default Name;
