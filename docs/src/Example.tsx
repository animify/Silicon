import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Flex, Text } from '../../src';
import Highlight, { defaultProps } from 'prism-react-renderer';
import exampleTheme from '../defaults/exampleTheme';

interface Props {
    children: React.ReactNode;
    title: string;
    description: React.ReactText | React.ReactNode;
}

export default function Example({ children, title, description }: Props) {
    const childrenAsString = reactElementToJSXString(children, { tabStop: 3, maxInlineAttributesLineLength: 100 });

    return (
        <Flex direction="column" mb="12">
            <Text size="h4" weight="semibold">
                {title}
            </Text>
            <Text color="dark50">{description}</Text>
            <Flex direction="column" mt="4" borderWidth={1} borderStyle="solid" borderColor="dark80" borderRadius={8}>
                <Flex px="5" py="7">
                    {children}
                </Flex>
                <Highlight {...defaultProps} theme={exampleTheme} code={childrenAsString} language="jsx">
                    {({ style, tokens, getLineProps, getTokenProps }) => (
                        <Flex as="pre" p="5" borderRadius="0 0 8px 8px" overflowX="scroll" css={style}>
                            <code>
                                {tokens.map((line, i) => (
                                    <Text
                                        key={`line-${i}`}
                                        family="code"
                                        as="div"
                                        css={{ fontSize: 13, lineHeight: 1.5 }}
                                        {...getLineProps({ line, key: i })}
                                    >
                                        {line.map((token, key) => (
                                            <span key={`token-${key}`} {...getTokenProps({ token, key })} />
                                        ))}
                                    </Text>
                                ))}
                            </code>
                        </Flex>
                    )}
                </Highlight>
            </Flex>
        </Flex>
    );
}
