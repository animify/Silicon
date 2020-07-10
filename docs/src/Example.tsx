import React from 'react';
import jsxToString from 'jsx-to-string';
import { Flex } from '../../src';

interface Props {
    children: React.ReactNode;
}

export default function Example({ children }: Props) {
    const childrenAsString = jsxToString(children);

    return (
        <Flex direction="column" mt="4" borderColor="black" css={{ border: '1px solid' }}>
            <Flex p="5">{children}</Flex>
            <Flex p="5" borderColor="black" css={{ borderTop: '1px solid' }}>
                <code>{childrenAsString}</code>
            </Flex>
        </Flex>
    );
}
