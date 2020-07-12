import React from 'react';
import { Container } from '../../src';
import { Nav, Sidebar } from './components';

interface Props {
    children: React.ReactNode;
}

export default function Page({ children }: Props) {
    return (
        <>
            <Nav />

            <Container as="main" p="8" css={{ display: 'flex' }}>
                <Sidebar />

                <Container as="main" size="md">
                    {children}
                </Container>
            </Container>
        </>
    );
}
