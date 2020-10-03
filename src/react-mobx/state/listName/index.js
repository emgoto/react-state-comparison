import { makeAutoObservable } from 'mobx';
import { initialState } from '../../../common/mocks';

class ListName {
    listName = initialState.listName;

    constructor() {
        makeAutoObservable(this);
    }

    updateListName = (listName) => (this.listName = listName);
}

export default ListName;
