import React from 'react';

import Search from '../Search';
import Card from '../Card';

import styles from './style';

class UserList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
            key: null
        }
        this.select = this.select.bind(this);
        this.search = this.search.bind(this);
    }

    select(id) {
        this.setState({
            selected: id
        });
        this.props.changeDialog(id);
    }

    search(key) {
        this.setState({ key });
    }

    render() {
        const { selected, key } = this.state;
        const { dialogs } = this.props;
        const result = key ? dialogs.filter(({name}) => name.includes(key)) : dialogs;
        
        return <div className={styles['container']}>
            <Search search={this.search} />
            <div className={styles['dialogs']}>
                {result.map(dialog => <Card key={dialog.id} data={dialog} actived={selected == dialog.id} handleClick={() => this.select(dialog.id)} />)}
            </div>
        </div>
    }
}

export default UserList;