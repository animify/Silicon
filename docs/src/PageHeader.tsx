import React from 'react';
import { Flex, Text } from '../../src';
import CodeSnippet from './CodeSnippet';

interface Props {
    title: string;
    description: string;
    importName?: string;
}

export default function PageHeader({ title, description, importName }: Props) {
    const code = `import { ${importName} } from "silicon.ui"`;

    return (
        <Flex direction="column" pb="12" mb="12" borderBottomWidth={2} borderBottomStyle="solid" borderColor="dark90">
            <Text size="h2" weight="bold">
                {title}
            </Text>
            <Text color="dark40">{description}</Text>
            {importName && <CodeSnippet title="Import" code={code} />}
        </Flex>
    );
}
