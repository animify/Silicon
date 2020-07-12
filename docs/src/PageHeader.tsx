import React from 'react';
import { Flex, Text } from '../../src';

interface Props {
    title: string;
    description: string;
    importName?: string;
}

export default function PageHeader({ title, description, importName }: Props) {
    return (
        <Flex direction="column" mb="12">
            <Text size="h2" weight="bold">
                {title}
            </Text>
            <Text color="dark40">{description}</Text>
            {importName && (
                <Text mt="6" family="code">
                    import &#123; {importName} &#125; from &#x27;silicon.ui&#x27;;
                </Text>
            )}
        </Flex>
    );
}
