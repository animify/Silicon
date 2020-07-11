import React from 'react';
import Example from '../Example';
import { Button } from '../../../src';

export default function PageButton() {
    return (
        <section>
            <Example>
                <Button kind="primary">Primary Button</Button>
            </Example>
            <Example>
                <Button kind="secondary" disabled={true}>
                    Disabled
                </Button>
            </Example>
            <Example>
                <Button kind="secondary" loading={true}>
                    Loading
                </Button>
            </Example>
            <Example>
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
    );
}
