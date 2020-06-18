import { combineReducers } from 'redux';

import listName from './list-name';
import tasks from './tasks';

const reducer = combineReducers({ listName, tasks });

export default reducer;
