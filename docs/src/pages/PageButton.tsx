import React from 'react';
import Example from '../Example';
import { Button } from '../../../src';
import PageHeader from '../PageHeader';

export default function PageButton() {
    return (
        <>
            <PageHeader title="Button" description="The button component is used for." importName="Button" />

            <section>
                <Example title="Primary Button" description="The primary button.">
                    <Button kind="primary">Primary Button</Button>
                </Example>
                <Example title="Disabled Button" description="The primary button.">
                    <Button kind="secondary" disabled={true}>
                        Disabled
                    </Button>
                </Example>
                <Example title="Loading Button" description="The primary button.">
                    <Button kind="secondary" loading={true}>
                        Loading
                    </Button>
                </Example>
                <Example title="Customized Button" description="The primary button.">
                    <Button
                        kind="secondary"
                        css={(state) => ({
                            backgroundColor: 'red',
                            marginTop: 100,
                            fontWeight: state.theme.fontWeight.black,
                            nested: { ':hover': { fontWeight: state.theme.fontWeight.thin } },
                        })}
                    >
                        Improve
                    </Button>
                </Example>
            </section>
        </>
    );
}
