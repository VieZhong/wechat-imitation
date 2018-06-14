import React from 'react';

import UserList from '../../container/UserList';
import Dialog from '../Dialog';

import styles from './style';

function Chat() {
    return <div className={styles['container']}>
        <UserList />
        <Dialog />
    </div>
}

export default Chat;