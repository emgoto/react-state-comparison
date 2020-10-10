import { atom } from 'recoil';
import { initialState } from '../../../common/mocks';

const taskNameState = atom({
    key: 'taskNameState',
    default: initialState.listName
});

export default taskNameState;
