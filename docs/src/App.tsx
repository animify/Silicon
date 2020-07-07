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
