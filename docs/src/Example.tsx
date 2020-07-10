import React from 'react';
import reactElementToJSXString from 'react-element-to-jsx-string';
import { Flex } from '../../src';
import Highlight, { defaultProps } from 'prism-react-renderer';

interface Props {
    children: React.ReactNode;
}

export default function Example({ children }: Props) {
    const childrenAsString = reactElementToJSXString(children);

    return (
        <Flex direction="column" mt="4" borderColor="black" css={{ border: '1px solid' }}>
            <Flex p="5">{children}</Flex>
            <Highlight {...defaultProps} code={childrenAsString} language="jsx">
                {({ tokens, getLineProps, getTokenProps }) => (
                    <Flex as="pre" p="5" borderColor="black" borderTop="1px solid" overflowX="scroll">
                        {tokens.map((line, i) => (
                            <div key={`line-${i}`} {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span key={`token-${key}`} {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </Flex>
                )}
            </Highlight>
        </Flex>
    );
}
