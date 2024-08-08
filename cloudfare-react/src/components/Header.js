// src/components/Header.js
import React from 'react';
import '../style/Index.css'; // Arquivo CSS correspondente

const Header = () => {
    return (
        <header>
            <nav>
                <div className="logo">Text to Home</div>
                <ul className="nav-links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/subject1">Subject 1</a></li>
                    <li><a href="/subject2">Subject 2</a></li>
                    <li><a href="/subject3">Subject 3</a></li>
                    <li><a href="/subject4">Subject 4</a></li>
                    <li><a href="/subject5">Subject 5</a></li>
                    <li><a href="/subject6">Subject 6</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
