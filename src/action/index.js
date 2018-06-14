import { createAction } from 'redux-actions';

import * as reducerTpye from '../unit/reducerType';

export const changeDialogId = createAction(reducerTpye.UPDATE_DIALOG_ID);
