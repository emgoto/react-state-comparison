import { action } from 'easy-peasy';

const updateListName = action((state, listName) => {
    state.listName = listName;
});

export default updateListName;
