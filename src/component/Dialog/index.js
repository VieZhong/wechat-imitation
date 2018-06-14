import React from 'react';

import DialogBox from '../DialogBox';
import SendBox from '../SendBox';

import styles from './style';


function Dialog(props) {
    const { id, name, data } = props.dialog;
    return <div className={styles['container']}>
        <div className={styles['header']}>
            <div className={styles['close']}>
                <i></i>
            </div>
            <div className={styles['name']}>
                {name}
            </div>
        </div>
        <DialogBox data={data} self_avatar_url={props.self_avatar_url} />
        <SendBox hidden={!id} commit={props.commit(id)}/>
    </div>
}

export default Dialog;