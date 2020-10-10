import { atom } from 'recoil';
import { initialState } from '../../../common/mocks';

const tasksState = atom({
    key: 'tasksState',
    default: initialState.tasks
});

export default tasksState;
