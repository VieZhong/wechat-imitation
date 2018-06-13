import { combineReducers } from 'redux-immutable';

import selfInfo from './selfInfo';

const rootReducer = combineReducers({
    selfInfo
});

export default rootReducer;