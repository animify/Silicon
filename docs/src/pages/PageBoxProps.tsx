import React from 'react';
import Example from '../Example';
import { Flex, Text } from '../../../src';

export default function PageBoxProps() {
    return (
        <section>
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
        </section>
    );
}
