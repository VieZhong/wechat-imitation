import { createAction } from 'redux-actions';

import * as reducerTpye from '../unit/reducerType';

export const changeDialogId = createAction(reducerTpye.UPDATE_DIALOG_ID);

export const updateDialogs = createAction(reducerTpye.UPDATE_DIALOGS);
export const getDialogs = createAction(reducerTpye.GET_DIALOGS);

export const updateSelfInfo = createAction(reducerTpye.UPDATE_SELF_INFO);

