import React from 'react';
import Example from '../Example';
import { Flex, Text } from '../../../src';
import PageHeader from '../PageHeader';

export default function PageBoxProps() {
    return (
        <>
            <PageHeader title="Box Properties" description="The Box properties are used for." />

            <section>
                <Example title="Custom Box Props" description="Passing custom box props">
                    <Flex p={32} bg="primary">
                        Primary bg
                    </Flex>
                </Example>

                <Example title="Custom Box Props" description="Passing custom box props">
                    <Flex p={32} bg="secondary" color="white">
                        White color
                    </Flex>
                </Example>

                <Example title="Custom Box Props" description="Passing custom box props">
                    <Flex m="3" bg="secondary" color="white">
                        Margin 12
                    </Flex>
                </Example>

                <Example title="Custom Box Props" description="Passing custom box props">
                    <Flex p="6" bg="secondary" color="white">
                        Padding 24
                    </Flex>
                </Example>

                <Example title="Custom Box Props" description="Passing custom box props">
                    <Flex mb="1" ml="2" mt="3" mr="4" bg="secondary" color="white">
                        Margin Custom
                    </Flex>
                </Example>

                <Example title="Custom Box Props" description="Passing custom box props">
                    <Flex pb="1" pl="2" pt="3" pr="4" bg="secondary" color="white">
                        Padding Custom
                    </Flex>
                </Example>

                <Example title="Custom Box Props" description="Passing custom box props">
                    <Text family="code">Family Custom</Text>
                </Example>

                <Example title="Custom Box Props" description="Passing custom box props">
                    <Text size="h3" letterSpacing="small">
                        Size Custom
                    </Text>
                </Example>
            </section>
        </>
    );
}
