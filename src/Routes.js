import React from 'react'

import {BrowserRouter, Switch, Route} from 'react-router-dom';
import App from './App';
import Numbers from './components/screens/Numbers';

const Routes = () => {
    return (
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/numbers" component={Numbers} />
                </Switch>
            </BrowserRouter>
    )
}

export default Routes
