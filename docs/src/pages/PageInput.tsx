import React from 'react';
import Example from '../Example';
import { Input } from '../../../src';

export default function PageInput() {
    return (
        <section>
            <Example>
                <Input placeholder="Placeholder value" defaultValue="Input value" />
            </Example>
        </section>
    );
}
