import React from 'react';
import { Text, Flex } from '../../src';
import packageInfo from '../../package.json';

export default function Nav() {
    return (
        <Flex as="nav" width="100%" justify="space-between" p={32}>
            <Text>Silicon UI</Text>
            <Text>{packageInfo.version}</Text>
        </Flex>
    );
}
