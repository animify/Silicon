import React from 'react';
import { Button, Silicon } from '../../src';

export default function App() {
    return (
        <Silicon>
            <>
                <p>Silicon Docs</p>
                <div style={{ margin: 10 }}>
                    <Button kind="primary">Primary Button</Button>
                </div>
                <div style={{ margin: 10 }}>
                    <h5>Disabled Button</h5>
                    <Button kind="secondary" disabled={true}>
                        Disabled
                    </Button>
                </div>
                <div style={{ margin: 10 }}>
                    <h5>Loading Button</h5>
                    <Button kind="secondary" loading={true}>
                        Loading
                    </Button>
                </div>
                <div style={{ margin: 10 }}>
                    <h5>Custom Button</h5>
                    <Button
                        kind="secondary"
                        style={(state) => ({
                            backgroundColor: 'red',
                            marginTop: 100,
                            fontWeight: state.theme.font.weight.black,
                            nested: { ':hover': { fontWeight: state.theme.font.weight.thin } },
                        })}
                    >
                        Improve
                    </Button>
                </div>
            </>
        </Silicon>
    );
}
