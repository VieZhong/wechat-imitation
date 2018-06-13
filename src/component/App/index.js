import React from 'react';

import {
    BrowserRouter,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'

import Chat from '../Chat';
import Nav_Container from '../../container/Nav';
import Contact from '../Contact';
import Box from '../Box';


import styles from './style';

const App = () => <BrowserRouter>
    <div className={styles['frame']}>
        <Nav_Container />
        <Switch>
            <Redirect exact from="/" to="/chat" />
            <Route path="/chat" component={Chat} />
            <Route path="/contact" component={Contact} />
            <Route path="/box" component={Box} />
        </Switch>
    </div>
</BrowserRouter>;

export default App;