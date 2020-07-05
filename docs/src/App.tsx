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
                    <Button kind="secondary">Secondary Button</Button>
                </div>
            </>
        </Silicon>
    );
}
