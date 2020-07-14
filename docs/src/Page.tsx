import React from 'react';
import { Container } from '../../src';
import { Sidebar } from './components';

interface Props {
    children: React.ReactNode;
}

export default function Page({ children }: Props) {
    return (
        <>
            {/* <Nav /> */}

            <Container as="main" mt="12" p="8" display="flex">
                <Sidebar />

                <Container as="main" size="md">
                    {children}
                </Container>
            </Container>
        </>
    );
}
