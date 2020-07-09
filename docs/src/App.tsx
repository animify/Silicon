import React from 'react';
import { Button, Silicon, Text } from '../../src';
import Nav from './Nav';
import Image from '../../src/components/Image';

export default function App() {
    return (
        <Silicon>
            <Nav />
            <Text size="h3" weight="bold">
                Font Sizes
            </Text>

            <div style={{ margin: 10 }}>
                <Text size="h1">Heading 1</Text>
            </div>
            <div style={{ margin: 10 }}>
                <Text size="h2">Heading 2</Text>
            </div>
            <div style={{ margin: 10 }}>
                <Text size="h3">Heading 3</Text>
            </div>
            <div style={{ margin: 10 }}>
                <Text size="h4">Heading 4</Text>
            </div>
            <div style={{ margin: 10 }}>
                <Text size="h5">Heading 5</Text>
            </div>
            <div style={{ margin: 10 }}>
                <Text size="h6">Heading 6</Text>
            </div>
            <div style={{ margin: 10 }}>
                <Text size="p">Paragraph</Text>
            </div>
            <div style={{ margin: 10 }}>
                <Text size="small">Small</Text>
            </div>

            <Text size="h3" weight="bold">
                Font Weights
            </Text>

            <div style={{ margin: 10 }}>
                <Text weight="thin">Thin</Text>
            </div>

            <div style={{ margin: 10 }}>
                <Text weight="extraLight">Extra Light</Text>
            </div>

            <div style={{ margin: 10 }}>
                <Text weight="light">Light</Text>
            </div>

            <div style={{ margin: 10 }}>
                <Text weight="regular">Regular</Text>
            </div>

            <div style={{ margin: 10 }}>
                <Text weight="medium">Medium</Text>
            </div>

            <div style={{ margin: 10 }}>
                <Text weight="semibold">Semibold</Text>
            </div>

            <div style={{ margin: 10 }}>
                <Text weight="bold">Bold</Text>
            </div>

            <div style={{ margin: 10 }}>
                <Text weight="extraBold">Extra Bold</Text>
            </div>

            <div style={{ margin: 10 }}>
                <Text weight="black">Black</Text>
            </div>

            <Text size="h3" weight="bold">
                Image
            </Text>

            <Image
                src="https://camo.githubusercontent.com/6062000b0601afb16c465372b15edd8cb78435fd/68747470733a2f2f692e696d6775722e636f6d2f584b54556754382e706e67"
                alt="Some image"
                maxWidth={300}
            />

            <Text size="h3" weight="bold">
                Buttons
            </Text>

            <div style={{ margin: 10 }}>
                <Button kind="primary">Primary Button</Button>
            </div>
            <div style={{ margin: 10 }}>
                <Button kind="secondary" disabled={true}>
                    Disabled
                </Button>
            </div>
            <div style={{ margin: 10 }}>
                <Button kind="secondary" loading={true}>
                    Loading
                </Button>
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
        </Silicon>
    );
}
