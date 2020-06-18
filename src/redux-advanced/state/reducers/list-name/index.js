import { UPDATE_LIST_NAME } from '../../actions';

const initialState = 'My to-do list';

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_LIST_NAME: {
            const { name } = action.payload;
            return name;
        }

        default: {
            return state;
        }
    }
};

export default reducer;
