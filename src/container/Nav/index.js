import React from 'react';
import {
    connect
} from 'react-redux';

import Nav from '../../component/Nav';

const mapStateToProps = state => ({
    avatar_url: state.get('selfInfo').avatar_url
})

export default connect(mapStateToProps)(Nav);