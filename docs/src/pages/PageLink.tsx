import React from 'react';
import Example from '../Example';
import { Link } from '../../../src';
import PageHeader from '../PageHeader';

export default function PageLink() {
    return (
        <>
            <PageHeader title="Link" description="The Link component is used for." importName="Link" />

            <section>
                <Example title="Primar Link" description="The primary link">
                    <Link href="https://silicon.gg">Silicon UI</Link>
                </Example>
            </section>
        </>
    );
}
