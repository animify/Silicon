import React from 'react';
import Example from '../Example';
import { Input } from '../../../src';
import PageHeader from '../PageHeader';

export default function PageInput() {
    return (
        <>
            <PageHeader title="Input" description="The Input component is used for." importName="Input" />

            <section>
                <Example title="Default Input" description="The default input">
                    <Input placeholder="Placeholder value" defaultValue="Input value" />
                </Example>
            </section>
        </>
    );
}
