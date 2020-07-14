import React, { useEffect } from 'react';
import { Flex, Text, Link } from '../../src';
import Highlight, { defaultProps } from 'prism-react-renderer';
import exampleTheme from '../defaults/exampleTheme';
import useCopy from 'use-copy';

interface Props {
    title: string;
    code: string;
}

export default function CodeSnippet({ title, code }: Props) {
    const [copied, copy, setCopied] = useCopy(code);

    useEffect(() => {
        if (!copied) return;
        setTimeout(() => setCopied(false), 3000);
    }, [copied, setCopied]);

    return (
        <Flex direction="column" mt="6">
            <Flex align="center" justify="space-between" pb="2">
                <Text size="small" weight="semibold" color="dark30">
                    {title}
                </Text>
                <Link size="small" weight="medium" color={copied ? 'green30' : 'dark50'} onClick={copy}>
                    {copied ? 'Copied' : 'Copy'}
                </Link>
            </Flex>
            <Highlight {...defaultProps} theme={exampleTheme} code={code} language="jsx">
                {({ style, tokens, getLineProps, getTokenProps }) => (
                    <Flex as="pre" p="5" borderRadius={4} overflowX="scroll" css={style}>
                        <code>
                            {tokens.map((line, i) => (
                                <Text
                                    key={`line-${i}`}
                                    family="code"
                                    as="div"
                                    size="small"
                                    css={{ lineHeight: 1.5 }}
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
