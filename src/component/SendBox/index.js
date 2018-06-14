import React from 'react';

import styles from './style';

class Dialog extends React.Component {
    constructor() {
        super();
        this.state = {
            message: ''
        }
        this.write = this.write.bind(this);
        this.send = this.send.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    write({target}) {
        this.setState({
            message: target.value
        })
    }

    onKeyDown(e) {
        if(e.keyCode == 13) {
            e.preventDefault();
            this.send();
        }

    }

    send() {
        const { message } = this.state;
        if(message) {
            this.props.commit(message, new Date().valueOf());
            this.setState({
                message: ''
            })
        }
    }

    render() {
        const { message } = this.state;
        const { hidden } = this.props;
        return hidden ? <div></div> : <div className={styles['container']}>
            <textarea name="text" onChange={this.write} value={message} onKeyDown={this.onKeyDown}></textarea>
            <button onClick={this.send}>发送(S)</button>
        </div>
    }
}

export default Dialog;