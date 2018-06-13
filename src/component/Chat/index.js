import React from 'react';

import UserList from '../UserList';
import Dialog from '../Dialog';

import styles from './style';

class Chat extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return <div className={styles['container']}>
            <UserList />
            <Dialog />
        </div>
    }
}

export default Chat;