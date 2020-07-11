import React from 'react';
import Example from '../Example';
import { Flex } from '../../../src';

export default function PageVariant() {
    return (
        <section>
            <Example>
                <Flex p={32} variant="card">
                    Card variant
                </Flex>
            </Example>
        </section>
    );
}
