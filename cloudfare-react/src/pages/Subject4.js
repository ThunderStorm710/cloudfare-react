// src/pages/Subject1.js
import React from 'react';

const Subject4 = () => {
    return (
        <div><section class="hero">
        <h1>Subject 4</h1>
        <h1>Cloudflare Nameservers</h1>
        <p>Dear Customer,</p>
        <p>Cloudflare's nameservers provide additional security and performance capabilities designed for integration with our services, such as CDN, DDoS protection and so on. Unlike Google DNS and OpenDNS, which primarily provide resolution services, Cloudflare's nameservers enable you to directly manage DNS in addition to these benefits.</p>
        <p>Thought Process:</p>
        <p>The customer wants to understand the advantages of adopting Cloudflare's nameservers over other DNS providers.</p>
        <p>Tools Used:</p>
        <ul>
            <li>Cloudflare Dashboard: Helps demonstrate how DNS settings are managed and how they integrate with other Cloudflare services.
            </li>
        </ul>
        <p>While you can delegate your subdomain to Cloudflare's nameservers, it is typically advised that you use Cloudflare as your primary DNS provider to take full advantage of all of our services and capabilities.</p>
        <a href="/subject3" class="cta-button">Previous</a>
        <a href="/subject5" class="cta-button">Next</a>
    
    </section>
    
    <section class="hero">
    </section></div>

    );
};

export default Subject4;
