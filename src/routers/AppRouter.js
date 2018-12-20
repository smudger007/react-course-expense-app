import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import NotFound from '../components/NotFound';
import PrivateRoute from './PrivateRoute';
import { create } from 'domain';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            
            <Switch>
            <Route path="/" component={LoginPage}  exact={true} />
            <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
            <PrivateRoute path="/create" component={AddExpensePage} />
            <PrivateRoute path="/edit/:id" component={EditExpensePage} />
            <Route path="/help" component={HelpPage}></Route>
            <Route component={NotFound}></Route>
        </Switch>
        </div>
    </Router>
);

export default AppRouter;