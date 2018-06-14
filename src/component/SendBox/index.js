import React from 'react';

import styles from './style';

class Dialog extends React.Component {
    constructor() {
        super();
        this.state = {
            message: '',
            isEditing: false
        }
        this.write = this.write.bind(this);
        this.send = this.send.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
        this.onFocus = this.onFocus.bind(this);
        this.onBlur = this.onBlur.bind(this);
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

    onFocus() {
        this.setState({
            isEditing: true
        })
    }

    onBlur() {
        this.setState({
            isEditing: false
        })
    }

    render() {
        const { message, isEditing } = this.state;
        const { hidden } = this.props;
        return hidden ? <div></div> : <div className={styles['container']} style={{backgroundColor: isEditing ? '#fff' : 'transparent'}}>
            <textarea name="text" onChange={this.write} value={message} onKeyDown={this.onKeyDown} onFocus={this.onFocus} onBlur={this.onBlur}></textarea>
            <button onClick={this.send}>发送(S)</button>
        </div>
    }
}

export default Dialog;