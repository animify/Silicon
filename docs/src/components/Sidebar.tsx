import React from 'react';
import { Flex, Text } from '../../../src';
import { componentRoutes, themeRoutes, styleRoutes } from '../defaults/routes';
import { Link } from 'react-router-dom';

const routesList = [
    { title: 'Components', routes: componentRoutes },
    { title: 'Theme', routes: themeRoutes },
    { title: 'API', routes: styleRoutes },
];

export default function Sidebar() {
    return (
        <Flex as="section" grow={1} shrink={0} mr="6" direction="column">
            {routesList.map(({ title, routes }) => (
                <Flex key={title} direction="column" mb="4">
                    <Text weight="semibold">{title}</Text>
                    {Object.entries(routes).map(([key, route]) => (
                        <Link key={key} to={route.path}>
                            {route.title}
                        </Link>
                    ))}
                </Flex>
            ))}
        </Flex>
    );
}
