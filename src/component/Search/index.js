import React from 'react';

import search_url from '../../image/search.svg';
import plus_url from '../../image/plus.svg';

import styles from './style';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {
            key: ''
        }
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onKeyDown(e) {
        if(e.keyCode == 13) {
            e.preventDefault();
            this.props.search(this.state.key);
        }
    }

    onChange({target}) {
        this.setState({
            key: target.value
        })
    }

    render() {
        const { key } = this.state;
        return <div className={styles['container']}>
            <div className={styles['search']}>
                <img src={search_url} alt="search" />
                <input type="text" placeholder="搜索" onKeyDown={this.onKeyDown} onChange={this.onChange} value={key} />
            </div>
            <div className={styles['plus']}>
                <img src={plus_url} alt="plus" />
            </div>
        </div>
    }
}

export default Search;