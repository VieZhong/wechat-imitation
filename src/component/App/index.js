import React from 'react';

import { connect } from 'react-redux';

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import { updateSelfInfo } from '../../action';

import Chat from '../../container/Chat';
import Nav_Container from '../../container/Nav';
import Contact from '../Contact';
import Box from '../Box';
import Login from '../../container/Login';

import styles from './style';

const mapDispatchToProps = dispatch => ({
    updateSelfInfo: (info) => {
        dispatch(updateSelfInfo(info))
    }
});

class Frame extends React.Component {

    componentDidMount() {
        const userInfo = JSON.parse(window.sessionStorage.getItem('userInfo'));
        if(!userInfo.id) {
            this.props.history.push('/login');
        }
        this.props.updateSelfInfo(userInfo);
    }

    render() {    
        return <div className={styles['frame']}>
            <Nav_Container />
            <Switch>
                <Route path="/chat" component={Chat} />
                <Route path="/contact" component={Contact} />
                <Route path="/box" component={Box} />
            </Switch>
        </div>
    }
}


const App = () => <BrowserRouter basename={process.env.NODE_ENV == "production" ? "/communication" : "/"}>
    <Switch>
        <Redirect exact from="/" to="/login" />
        <Route from="/login" component={Login} />
        <Route component={connect(null, mapDispatchToProps)(Frame)} />
    </Switch>
</BrowserRouter>;

export default App;