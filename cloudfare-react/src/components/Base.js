// src/components/Layout.js
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Base = ({ children }) => {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Base;
