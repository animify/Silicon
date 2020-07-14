import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Flex, Text } from '../../src';
import CodeSnippet from './CodeSnippet';

interface Props {
    children: React.ReactNode;
    title: string;
    description: React.ReactText | React.ReactNode;
}

export default function Example({ children, title, description }: Props) {
    const code = reactElementToJSXString(children, { tabStop: 3, maxInlineAttributesLineLength: 100 });

    return (
        <Flex direction="column" pb="12" mb="12" borderBottomWidth={2} borderBottomStyle="solid" borderColor="dark90">
            <Text size="h4" weight="semibold" mb="1">
                {title}
            </Text>
            <Text color="dark40">{description}</Text>
            <Flex direction="column" mt="6">
                <Text pb="2" size="small" weight="semibold" color="dark30">
                    Preview
                </Text>
                <Flex px="5" py="7" borderWidth={1} borderStyle="solid" borderColor="dark80" borderRadius={4}>
                    {children}
                </Flex>
                <CodeSnippet title="React" code={code} />
            </Flex>
        </Flex>
    );
}
