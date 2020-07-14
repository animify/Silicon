import React from 'react';
import Example from '../Example';
import { Text } from '../../../src';
import PageHeader from '../PageHeader';

export default function PageCSS() {
    return (
        <>
            <PageHeader title="CSS Property" description="The CSS property is used for." />

            <section>
                <Example title="Overring styles" description="Overriding styles">
                    <Text size="h1" css={{ fontWeight: 800, fontSize: 11 }}>
                        Heading 1
                    </Text>
                </Example>
            </section>
        </>
    );
}
