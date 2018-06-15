import React from 'react';

import UserList from '../../container/UserList';
import Dialog from '../../container/Dialog';

import styles from './style';


class Chat extends React.Component {
    componentDidMount() {
        this.props.getDialogs();
    }

    render() {
        return <div className={styles['container']}>
            <UserList />
            <Dialog />
        </div>
    }
}

export default Chat;