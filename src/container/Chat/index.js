import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

import { getDialogs } from '../../action';

import Chat from '../../component/Chat';

const mapDispatchToProps = dispatch => {
    return {
        getDialogs: () => {
            dispatch((dispatch, getState) => {
                const { id } = getState().get('selfInfo');
                return axios
                            .get(`/api/chat/${id}/dialogs`)
                            .then(({data}) => {
                                dispatch(getDialogs(data));
                            });
            });
        }
    }
}

export default connect(null, mapDispatchToProps)(Chat);