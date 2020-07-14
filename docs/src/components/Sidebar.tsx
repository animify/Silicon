import React from 'react';
import { Flex, Text, Link } from '../../../src';
import { componentRoutes, themeRoutes, styleRoutes } from '../defaults/routes';
import { Link as RouterLink } from 'react-router-dom';
import packageInfo from '../../../package.json';

const routesList = [
    { title: 'Components', routes: componentRoutes },
    { title: 'Theme', routes: themeRoutes },
    { title: 'API', routes: styleRoutes },
];

export default function Sidebar() {
    return (
        <Flex as="aside" grow={1} shrink={0} pt="4" pr="10">
            <Flex direction="column" position="fixed">
                <Flex
                    direction="column"
                    mb="8"
                    pb="8"
                    borderBottomWidth={2}
                    borderBottomStyle="solid"
                    borderColor="dark90"
                >
                    <Text weight="black">Silicon UI</Text>
                    <Text mt="1" size="small" weight="bold" color="red70">
                        {packageInfo.version}
                    </Text>
                </Flex>
                {routesList.map(({ title, routes }) => (
                    <Flex key={title} direction="column" mb="6">
                        <Text weight="semibold" mb="2">
                            {title}
                        </Text>
                        {Object.entries(routes).map(([key, route]) => (
                            <Link key={key} as={RouterLink} to={route.path} py="1" size="p" color="dark40">
                                {route.title}
                            </Link>
                        ))}
                    </Flex>
                ))}
            </Flex>
        </Flex>
    );
}
