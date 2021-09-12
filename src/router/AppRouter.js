import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import LandingPage from '../pages/LandingPage';
import NotFoundPage from '../pages/NotFoundPage';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" component={LandingPage} />
                <PrivateRouter path="/dashboard" component={DashboardPage} />
                <Route exact path="/" component={LandingPage} />
                <Route path="*" component={NotFoundPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default AppRouter
