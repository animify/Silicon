import React from 'react';
import Example from '../Example';
import PageHeader from '../PageHeader';
import { Button } from '../../../src';

export default function PageVariant() {
    return (
        <>
            <PageHeader title="Variant" description="The variant is used for." />

            <section>
                <Example title="Large Button Variant" description="The large button variant">
                    <Button variant={['primary', 'large']}>Large primary button</Button>
                </Example>
                <Example title="Small Button Variant" description="The small button variant">
                    <Button variant={['primary', 'small']}>Small primary button</Button>
                </Example>
            </section>
        </>
    );
}
