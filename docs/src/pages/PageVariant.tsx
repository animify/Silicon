import React from 'react';
import Example from '../Example';
import { Flex } from '../../../src';
import PageHeader from '../PageHeader';

export default function PageVariant() {
    return (
        <>
            <PageHeader title="Variant" description="The variant is used for." />

            <section>
                <Example title="Card Variant" description="The card variant">
                    <Flex p={32} variant="card">
                        Card variant
                    </Flex>
                </Example>
            </section>
        </>
    );
}
