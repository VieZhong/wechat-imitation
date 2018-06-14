import React from 'react';

import Search from '../Search';
import Card from '../Card';

import styles from './style';

class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            selected: null
        }
        this.select = this.select.bind(this);
    }

    select(id) {
        this.setState({
            selected: id
        });
        this.props.changeDialog(id);
    }

    render() {
        const { selected } = this.state;
        const { dialogs } = this.props;
        return <div className={styles['container']}>
            <Search />
            <div className={styles['dialogs']}>
                {dialogs.map(dialog => <Card key={dialog.id} data={dialog} actived={selected == dialog.id} handleClick={() => this.select(dialog.id)} />)}
            </div>
        </div>
    }
}

export default UserList;