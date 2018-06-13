import { combineReducers } from 'redux-immutable';

import selfInfo from './selfInfo';
import dialogs from './dialogs';

const rootReducer = combineReducers({
    selfInfo,
    dialogs
});

export default rootReducer;