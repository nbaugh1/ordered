import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ loggedIn, component: Component, ...rest }) => {
    return (

        <Route {...rest} render={props => (
            loggedIn ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;