import React, { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import { StoreContext } from '../../state/store';
import NameView from '../../../common/components/name';

const Name = observer(() => {
    const {
        listNameStore: { listName, updateListName }
    } = useContext(StoreContext);

    const onSetName = (name) => updateListName(name);

    return <NameView name={listName} onSetName={onSetName} />;
});

export default Name;
