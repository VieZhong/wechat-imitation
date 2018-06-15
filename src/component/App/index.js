import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Chat from '../../container/Chat';
import Nav_Container from '../../container/Nav';
import Contact from '../Contact';
import Box from '../Box';
import Login from '../Login';

import styles from './style';

function Frame() {
    return  <div className={styles['frame']}>
        <Nav_Container />
        <Switch>
            <Route path="/chat" component={Chat} />
            <Route path="/contact" component={Contact} />
            <Route path="/box" component={Box} />
        </Switch>
    </div>
}


const App = () => <BrowserRouter>
    <Switch>
        <Redirect exact from="/" to="/login" />
        <Route from="/login" component={Login} />
        <Route component={Frame} />
    </Switch>
</BrowserRouter>;

export default App;