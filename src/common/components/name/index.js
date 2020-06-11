import React from 'react';

const NameView = ({ name, onSetName }) => (
    <input
        type="text"
        defaultValue={name}
        onChange={(event) => onSetName(event.target.value)}
    />
);

export default NameView;
