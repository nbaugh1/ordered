import React, { useContext, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';



const PrivateRoute = ({ isLoggedIn, component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLoggedIn ?
                <Component {...props} />
                : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;