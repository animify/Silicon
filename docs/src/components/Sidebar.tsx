import React from 'react';
import { Flex } from '../../../src';
import routes from '../defaults/routes';
import { Link } from 'react-router-dom';

export default function Sidebar() {
    return (
        <Flex as="section" grow={1} shrink={0} mr="6" direction="column">
            {Object.entries(routes).map(([key, route]) => (
                <Link key={key} to={route.path}>
                    {route.title}
                </Link>
            ))}
        </Flex>
    );
}
