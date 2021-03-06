import React from 'react';
import Example from '../Example';
import { Image } from '../../../src';
import PageHeader from '../PageHeader';

export default function PageImage() {
    return (
        <>
            <PageHeader title="Image" description="The Image component is used for." importName="Image" />

            <section>
                <Example title="Image" description="The base image component">
                    <Image
                        src="https://camo.githubusercontent.com/6062000b0601afb16c465372b15edd8cb78435fd/68747470733a2f2f692e696d6775722e636f6d2f584b54556754382e706e67"
                        alt="Some image"
                        maxWidth={300}
                    />
                </Example>
            </section>
        </>
    );
}
