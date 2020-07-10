import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Flex, Text } from '../../src';
import Highlight, { defaultProps } from 'prism-react-renderer';
import exampleTheme from '../defaults/exampleTheme';

interface Props {
    children: React.ReactNode;
}

export default function Example({ children }: Props) {
    const childrenAsString = reactElementToJSXString(children, { tabStop: 3, maxInlineAttributesLineLength: 100 });

    return (
        <Flex direction="column" mt="4" borderColor="black" css={{ border: '1px solid' }}>
            <Flex p="5">{children}</Flex>
            <Highlight {...defaultProps} theme={exampleTheme} code={childrenAsString} language="jsx">
                {({ style, tokens, getLineProps, getTokenProps }) => (
                    <Flex as="pre" p="5" borderColor="black" borderTop="1px solid" overflowX="scroll" css={style}>
                        <code>
                            {tokens.map((line, i) => (
                                <Text
                                    family="code"
                                    size="small"
                                    as="div"
                                    key={`line-${i}`}
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
    );
}
