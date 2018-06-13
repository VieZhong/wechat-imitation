import React from 'react';

import search_url from '../../image/search.svg';
import plus_url from '../../image/plus.svg';

import styles from './style';

class Search extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return <div className={styles['container']}>
            <div className={styles['search']}>
                <img src={search_url} alt="search" />
                <input type="text" placeholder="搜索" />
            </div>
            <div className={styles['plus']}>
                <img src={plus_url} alt="plus" />
            </div>
        </div>
    }
}

export default Search;