import React from 'react';

import { Redirect, Route } from 'react-router-dom';

// user private route
export const UserPrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        localStorage.getItem('userToken') ? (
            <Component {...props} />
        ) : (
                <Redirect
                    to={{
                        pathname: "/login",
                        state: { from: props.location }
                    }}
                />
            )

    }
    />
)

// user route
export const UserRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props =>
        localStorage.getItem('userToken') ? (
            (
                <Redirect
                    to={{
                        pathname: "/profile",
                        state: { from: props.location }
                    }}
                />
            )
        ) :
            < Component {...props} />

    }
    />
)