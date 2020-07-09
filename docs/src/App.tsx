import React from 'react';
import { Button, Silicon, Text, Flex, Link } from '../../src';
import Nav from './Nav';
import Image from '../../src/components/Image';
import Container from '../../src/components/Container';

export default function App() {
    return (
        <Silicon>
            <Nav />

            <Container as="main" p={32}>
                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Font Sizes
                    </Text>

                    <Flex mt={12}>
                        <Text size="h1">Heading 1</Text>
                    </Flex>
                    <Flex mt={12}>
                        <Text size="h2">Heading 2</Text>
                    </Flex>
                    <Flex mt={12}>
                        <Text size="h3">Heading 3</Text>
                    </Flex>
                    <Flex mt={12}>
                        <Text size="h4">Heading 4</Text>
                    </Flex>
                    <Flex mt={12}>
                        <Text size="h5">Heading 5</Text>
                    </Flex>
                    <Flex mt={12}>
                        <Text size="h6">Heading 6</Text>
                    </Flex>
                    <Flex mt={12}>
                        <Text size="p">Paragraph</Text>
                    </Flex>
                    <Flex mt={12}>
                        <Text size="small">Small</Text>
                    </Flex>
                </Flex>

                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Font Weights
                    </Text>

                    <Flex mt={12}>
                        <Text weight="thin">Thin</Text>
                    </Flex>

                    <Flex mt={12}>
                        <Text weight="extraLight">Extra Light</Text>
                    </Flex>

                    <Flex mt={12}>
                        <Text weight="light">Light</Text>
                    </Flex>

                    <Flex mt={12}>
                        <Text weight="regular">Regular</Text>
                    </Flex>

                    <Flex mt={12}>
                        <Text weight="medium">Medium</Text>
                    </Flex>

                    <Flex mt={12}>
                        <Text weight="semibold">Semibold</Text>
                    </Flex>

                    <Flex mt={12}>
                        <Text weight="bold">Bold</Text>
                    </Flex>

                    <Flex mt={12}>
                        <Text weight="extraBold">Extra Bold</Text>
                    </Flex>

                    <Flex mt={12}>
                        <Text weight="black">Black</Text>
                    </Flex>
                </Flex>

                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Images
                    </Text>

                    <Image
                        src="https://camo.githubusercontent.com/6062000b0601afb16c465372b15edd8cb78435fd/68747470733a2f2f692e696d6775722e636f6d2f584b54556754382e706e67"
                        alt="Some image"
                        maxWidth={300}
                    />
                </Flex>

                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Link
                    </Text>

                    <Link href="https://silicon.gg">Silicon UI</Link>
                </Flex>

                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Buttons
                    </Text>

                    <Flex>
                        <Button kind="primary">Primary Button</Button>
                    </Flex>
                    <Flex mt={12}>
                        <Button kind="secondary" disabled={true}>
                            Disabled
                        </Button>
                    </Flex>
                    <Flex mt={12}>
                        <Button kind="secondary" loading={true}>
                            Loading
                        </Button>
                    </Flex>
                    <Flex mt={12}>
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
                    </Flex>
                </Flex>

                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Style Overrides
                    </Text>

                    <Flex mt={12}>
                        <Text size="h1" style={{ fontWeight: 800, fontSize: 11 }}>
                            Heading 1
                        </Text>
                    </Flex>
                </Flex>

                <Flex as="section" direction="column" mt={48}>
                    <Text size="h3" weight="bold" mb={12}>
                        Variants
                    </Text>

                    <Flex>
                        <Flex p={32} variant="card">
                            Card variant
                        </Flex>
                    </Flex>
                </Flex>
            </Container>
        </Silicon>
    );
}
