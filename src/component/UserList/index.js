import React from 'react';

import Search from '../Search';

import styles from './style';

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return <div className={styles['container']}>
            <Search />
        </div>
    }
}

export default UserList;