import React from 'react';
import NameView from '../../../common/components/name';
import { useName } from '../../state/store';

const Name = () => {
    const [listName, { updateListName }] = useName();

    const onSetName = (name) => updateListName(name);

    return <NameView name={listName} onSetName={onSetName} />;
};

export default Name;
