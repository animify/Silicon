import React from 'react';
import { Button, Silicon, Text, Flex, Link, Image, Container, Input } from '../../src';
import Nav from './Nav';
import Example from './Example';

export default function App() {
    return (
        <Silicon>
            <Nav />

            <Container as="main" p={32}>
                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Font Sizes
                    </Text>
                    <Example>
                        <Text size="h1">Heading 1</Text>
                    </Example>
                    <Example>
                        <Text size="h2">Heading 2</Text>
                    </Example>
                    <Example>
                        <Text size="h3">Heading 3</Text>
                    </Example>
                    <Example>
                        <Text size="h4">Heading 4</Text>
                    </Example>
                    <Example>
                        <Text size="h5">Heading 5</Text>
                    </Example>
                    <Example>
                        <Text size="h6">Heading 6</Text>
                    </Example>
                    <Example>
                        <Text size="p">Paragraph</Text>
                    </Example>
                    <Example>
                        <Text size="small">Small</Text>
                    </Example>
                </Flex>

                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Font Weights
                    </Text>

                    <Example>
                        <Text weight="thin">Thin</Text>
                    </Example>

                    <Example>
                        <Text weight="extraLight">Extra Light</Text>
                    </Example>

                    <Example>
                        <Text weight="light">Light</Text>
                    </Example>

                    <Example>
                        <Text weight="regular">Regular</Text>
                    </Example>

                    <Example>
                        <Text weight="medium">Medium</Text>
                    </Example>

                    <Example>
                        <Text weight="semibold">Semibold</Text>
                    </Example>

                    <Example>
                        <Text weight="bold">Bold</Text>
                    </Example>

                    <Example>
                        <Text weight="extraBold">Extra Bold</Text>
                    </Example>

                    <Example>
                        <Text weight="black">Black</Text>
                    </Example>
                </Flex>

                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Images
                    </Text>

                    <Example>
                        <Image
                            src="https://camo.githubusercontent.com/6062000b0601afb16c465372b15edd8cb78435fd/68747470733a2f2f692e696d6775722e636f6d2f584b54556754382e706e67"
                            alt="Some image"
                            maxWidth={300}
                        />
                    </Example>
                </Flex>

                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Link
                    </Text>

                    <Example>
                        <Link href="https://silicon.gg">Silicon UI</Link>
                    </Example>
                </Flex>

                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Form
                    </Text>

                    <Example>
                        <Input placeholder="Placeholder value" defaultValue="Input value" />
                    </Example>
                </Flex>

                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Buttons
                    </Text>

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
                </Flex>

                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Style Overrides
                    </Text>

                    <Example>
                        <Text size="h1" css={{ fontWeight: 800, fontSize: 11 }}>
                            Heading 1
                        </Text>
                    </Example>
                </Flex>

                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Variants
                    </Text>

                    <Example>
                        <Flex p={32} variant="card">
                            Card variant
                        </Flex>
                    </Example>
                </Flex>

                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Using Box props
                    </Text>

                    <Example>
                        <Flex p={32} bg="primary">
                            Primary bg
                        </Flex>
                    </Example>

                    <Example>
                        <Flex p={32} bg="secondary" color="white">
                            White color
                        </Flex>
                    </Example>

                    <Example>
                        <Flex m="3" bg="secondary" color="white">
                            Margin 12
                        </Flex>
                    </Example>

                    <Example>
                        <Flex p="6" bg="secondary" color="white">
                            Padding 24
                        </Flex>
                    </Example>

                    <Example>
                        <Flex mb="1" ml="2" mt="3" mr="4" bg="secondary" color="white">
                            Margin Custom
                        </Flex>
                    </Example>

                    <Example>
                        <Flex pb="1" pl="2" pt="3" pr="4" bg="secondary" color="white">
                            Padding Custom
                        </Flex>
                    </Example>

                    <Example>
                        <Text family="code">Family Custom</Text>
                    </Example>

                    <Example>
                        <Text size="h3" letterSpacing="small">
                            Size Custom
                        </Text>
                    </Example>
                </Flex>
            </Container>
        </Silicon>
    );
}
