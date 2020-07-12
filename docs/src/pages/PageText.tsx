import React from 'react';
import Example from '../Example';
import { Text } from '../../../src';
import PageHeader from '../PageHeader';

export default function PageText() {
    return (
        <>
            <PageHeader title="Text" description="The text component is used for." importName="Text" />
            <section>
                <Example title="Heading 1" description="The heading 1.">
                    <Text size="h1">Heading 1</Text>
                </Example>
                <Example title="Heading 2" description="The heading 1.">
                    <Text size="h2">Heading 2</Text>
                </Example>
                <Example title="Heading 3" description="The heading 1.">
                    <Text size="h3">Heading 3</Text>
                </Example>
                <Example title="Heading 4" description="The heading 1.">
                    <Text size="h4">Heading 4</Text>
                </Example>
                <Example title="Heading 5" description="The heading 1.">
                    <Text size="h5">Heading 5</Text>
                </Example>
                <Example title="Heading 6" description="The heading 1.">
                    <Text size="h6">Heading 6</Text>
                </Example>
                <Example title="Paragraph" description="The heading 1.">
                    <Text size="p">Paragraph</Text>
                </Example>
                <Example title="Small" description="The heading 1.">
                    <Text size="small">Small</Text>
                </Example>

                <Example title="Thin" description="The heading 1.">
                    <Text weight="thin">Thin</Text>
                </Example>

                <Example title="Extra Light" description="The heading 1.">
                    <Text weight="extraLight">Extra Light</Text>
                </Example>

                <Example title="Light" description="The heading 1.">
                    <Text weight="light">Light</Text>
                </Example>

                <Example title="Regular" description="The heading 1.">
                    <Text weight="regular">Regular</Text>
                </Example>

                <Example title="Medium" description="The heading 1.">
                    <Text weight="medium">Medium</Text>
                </Example>

                <Example title="Semi Bold" description="The heading 1.">
                    <Text weight="semibold">Semibold</Text>
                </Example>

                <Example title="Bold" description="The heading 1.">
                    <Text weight="bold">Bold</Text>
                </Example>

                <Example title="Extra Bold" description="The heading 1.">
                    <Text weight="extraBold">Extra Bold</Text>
                </Example>

                <Example title="Black" description="The heading 1.">
                    <Text weight="black">Black</Text>
                </Example>
            </section>
        </>
    );
}
