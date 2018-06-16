import React from 'react';

import { connect } from 'react-redux';

import axios from 'axios';

import { updateSelfInfo } from '../../action';

import Login from '../../component/Login';

function login(info) {
    return () => axios.post('/api/chat/login', info);
}

const mapDispatchToProps = dispatch => ({
    login: info => {
        return dispatch(login(info)).then(({data}) => {
            dispatch(updateSelfInfo(data));
            window.sessionStorage.setItem("userId", data.id);
        });
    }
});

export default connect(null, mapDispatchToProps)(Login);