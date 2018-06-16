import React from 'react';

import icon_url from '../../image/wechat.svg';

import styles from './style';

class Login extends React.Component {
    constructor() {
        super();

        this.state = {
            account: '',
            password: ''
        }

        this.submit = this.submit.bind(this);
        this.writeAccount = this.writeAccount.bind(this);
        this.writePassword = this.writePassword.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    submit() {
        const { account, password } = this.state;
        if(account && password) {
            this.props.login({account, password}).then(() => {
                this.props.history.push('/chat')
            });
        }
    }

    writePassword({target: {value}}) {
        this.setState({
            password: value
        })
    }

    writeAccount({target: {value}}) {
        this.setState({
            account: value
        })
    }

    onKeyDown({keyCode}) {
        if(keyCode == 13) {
            this.submit();
        }
    }

    render() {
        const { account, password } = this.state;
        return <div className={styles['container']}>
            <img src={icon_url} alt="logo"/>
            <input type="text" placeholder="账号" onChange={this.writeAccount} value={account} onKeyDown={this.onKeyDown} />
            <input type="password" placeholder="密码" onChange={this.writePassword} value={password} onKeyDown={this.onKeyDown} />
            <button onClick={this.submit}>登录</button>
        </div>
    }
}

export default Login;