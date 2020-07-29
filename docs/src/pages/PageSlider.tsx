import React from 'react';
import Example from '../Example';
import PageHeader from '../PageHeader';
import { Slider } from '../../../src';

export default function PageSlider() {
    return (
        <>
            <PageHeader title="Slider" description="The Slider component is used for." importName="Slider" />

            <section>
                <Example title="Default Slider" description="The default slider">
                    <Slider placeholder="Placeholder value" value={50} min={0} max={100} step={1} />
                </Example>
            </section>
        </>
    );
}
