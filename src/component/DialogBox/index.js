import React from 'react';

import styles from './style';

import temp_avatar_url from '../../image/data/temp.jpg';

class DialogBox extends React.Component {
    constructor() {
        super();
    }

    componentDidUpdate() {
        this.dom.scrollTop = this.dom.scrollHeight;
    }

    render() {
        const { data, self_avatar_url } = this.props;
        return <div className={styles['container']} ref={dom => {this.dom = dom}}>
            {data && data.map(([word, tag, time]) => {
                if(!tag) {
                    return <div className={styles['my-sentence']} key={time}>
                        <img src={self_avatar_url} alt="用户头像"/>
                        <span>{word}</span>
                    </div>
                }
                return <div className={styles['sentence']} key={time}>
                    <img src={temp_avatar_url} alt="用户头像"/>
                    <span>{word}</span>
                </div>
            })}
            
        </div>
    }
}

export default DialogBox;