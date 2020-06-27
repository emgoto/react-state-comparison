const updateListName = (listName) => ({ setState }) => {
    setState({ listName });
};

export default updateListName;
