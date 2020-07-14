import React from 'react';
import Example from '../Example';
import { Link } from '../../../src';

export default function PageLink() {
    return (
        <section>
            <Example title="Link" description="link">
                <Link href="https://silicon.gg">Silicon UI</Link>
            </Example>
        </section>
    );
}
