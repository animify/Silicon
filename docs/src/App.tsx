import React from 'react';
import { Silicon } from '../../src';
import Routes from './Routes';
import Page from './Page';
import { BrowserRouter as Router } from 'react-router-dom';

export default function App() {
    return (
        <Router>
            <Silicon>
                <Page>
                    <Routes />
                </Page>
            </Silicon>
        </Router>
    );
}
