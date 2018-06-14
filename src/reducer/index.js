import { combineReducers } from 'redux-immutable';

import selfInfo from './selfInfo';
import dialogs from './dialogs';
import currentDialogId from './currentDialogId'

const rootReducer = combineReducers({
    selfInfo,
    dialogs,
    currentDialogId
});

export default rootReducer;