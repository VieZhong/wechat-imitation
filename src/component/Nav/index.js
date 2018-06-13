import React from 'react';
import {
    Link
} from 'react-router-dom';

import style from './style.scss';

import more_url from '../../image/more.svg';

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            active: window.location.pathname.substring(1) || 'chat'
        }
        this.changeTag = this.changeTag.bind(this);

        window.addEventListener('popstate', () => {
            this.setState({
                active: window.location.pathname.substring(1) || 'chat'
            });
        }, false);
    }

    changeTag(tag) {
        return () => {
            this.setState({
                active: tag
            });
        }
    }

    render() {
        const {
            avatar_url
        } = this.props;
        const {
            active
        } = this.state;
        const icon_state = {
            chat: active == 'chat' ? 'chat-active' : 'chat',
            contact: active == 'contact' ? 'contact-active' : 'contact',
            box: active == 'box' ? 'box-active' : 'box'
        }
        return <div className={style['container']}>
            <div className={style['wrap-top']}>
                <div>
                    <img className={style['avatar']} src={avatar_url} alt="avatar" />
                </div>
                <div>
                    <Link to="/chat" className={style[icon_state['chat']]} onClick={this.changeTag('chat')}></Link>
                </div>
                <div>
                    <Link to="/contact" className={style[icon_state['contact']]} onClick={this.changeTag('contact')}></Link>
                </div>
                <div>
                    <Link to="/box" className={style[icon_state['box']]} onClick={this.changeTag('box')}></Link>
                </div>
            </div>
            <div className={style['wrap-bottom']}>
                <div>
                    <img src={more_url} alt="more"/>
                </div>
            </div>
        </div>
    }
}

export default Nav;