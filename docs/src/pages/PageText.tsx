import React from 'react';
import Example from '../Example';
import { Text } from '../../../src';

export default function PageText() {
    return (
        <section>
            <Example>
                <Text size="h1">Heading 1</Text>
            </Example>
            <Example>
                <Text size="h2">Heading 2</Text>
            </Example>
            <Example>
                <Text size="h3">Heading 3</Text>
            </Example>
            <Example>
                <Text size="h4">Heading 4</Text>
            </Example>
            <Example>
                <Text size="h5">Heading 5</Text>
            </Example>
            <Example>
                <Text size="h6">Heading 6</Text>
            </Example>
            <Example>
                <Text size="p">Paragraph</Text>
            </Example>
            <Example>
                <Text size="small">Small</Text>
            </Example>

            <Example>
                <Text weight="thin">Thin</Text>
            </Example>

            <Example>
                <Text weight="extraLight">Extra Light</Text>
            </Example>

            <Example>
                <Text weight="light">Light</Text>
            </Example>

            <Example>
                <Text weight="regular">Regular</Text>
            </Example>

            <Example>
                <Text weight="medium">Medium</Text>
            </Example>

            <Example>
                <Text weight="semibold">Semibold</Text>
            </Example>

            <Example>
                <Text weight="bold">Bold</Text>
            </Example>

            <Example>
                <Text weight="extraBold">Extra Bold</Text>
            </Example>

            <Example>
                <Text weight="black">Black</Text>
            </Example>
        </section>
    );
}
