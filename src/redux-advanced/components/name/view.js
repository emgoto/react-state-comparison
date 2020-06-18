import React from 'react';
import NameView from '../../../common/components/name';

const Name = ({ name, updateListName }) => (
    <NameView name={name} onSetName={updateListName} />
);

export default Name;
