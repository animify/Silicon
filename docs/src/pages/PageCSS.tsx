import React from 'react';
import Example from '../Example';
import { Text } from '../../../src';

export default function PageCSS() {
    return (
        <section>
            <Example>
                <Text size="h1" css={{ fontWeight: 800, fontSize: 11 }}>
                    Heading 1
                </Text>
            </Example>
        </section>
    );
}
