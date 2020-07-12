import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { componentRoutes, themeRoutes, styleRoutes } from './defaults/routes';

export default function Routes() {
    return (
        <Switch>
            {Object.entries({ ...componentRoutes, ...themeRoutes, ...styleRoutes }).map(([key, route]) => (
                <Route key={key} exact={true} path={route.path} component={route.component} />
            ))}
        </Switch>
    );
}
