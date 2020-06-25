import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import NameView from '../../../common/components/name';
import { nameSelector } from '../../state/selectors';
import { updateListName } from '../../state/reducers/list-name';

const Name = () => {
    const dispatch = useDispatch();
    const listName = useSelector(nameSelector);

    const onSetName = (name) => dispatch(updateListName({ name }));

    return <NameView name={listName} onSetName={onSetName} />;
};

export default Name;
