import React from 'react';
import {
    connect
} from 'react-redux';

import { updateDialogs, getDialogs } from '../../action';

import Dialog from '../../component/Dialog';

const ws = new WebSocket('ws://viezhong.top:8082');

const mapStateToProps = state => {
    const dialogId = state.get('currentDialogId');
    const dialogs = state.get('dialogs');
    return {
        dialog: dialogs.filter(({id}) => id == dialogId)[0] || {},
        self_avatar_url: state.get('selfInfo').avatar_url
    }
}

const mapDispatchToProps = dispatch => ({
    commit: id => (word, time) => {
        dispatch((dispatch, getState) => {
            dispatch(updateDialogs({id, word, time}));
            ws.send(JSON.stringify({id, word, time, by: getState().get('selfInfo').id}));
        });
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Dialog);