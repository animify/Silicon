import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './defaults/routes';

export default function Routes() {
    return (
        <Switch>
            {Object.entries(routes).map(([key, route]) => (
                <Route key={key} exact={true} path={route.path} component={route.component} />
            ))}
        </Switch>
    );
}
