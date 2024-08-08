// src/pages/Subject1.js
import React from 'react';

const Subject4 = () => {
    return (
        <div><section class="hero">
        <h1>Subject 4</h1>
        <h1>Response to: Cloudflare Nameservers</h1>
        <p>Dear Customer,</p>
        <p>Cloudflare’s nameservers provide enhanced security and performance features tailored specifically for integrating
            with our services like CDN, DDoS protection, and Workers. Unlike Google DNS or OpenDNS, which primarily provide
            resolution services, Cloudflare's nameservers allow you to manage DNS alongside these benefits directly.</p>
        <p>Thought Process:</p>
        <p>The customer needs clarity on the benefits of using Cloudflare’s nameservers over other DNS providers and whether
            they can be integrated while keeping their current DNS provider.</p>
        <p>Tools Used:</p>
        <ul>
            <li>Cloudflare Dashboard: To demonstrate how DNS settings are managed and how they integrate with other
                Cloudflare services.
            </li>
        </ul>
        <p>While you can delegate your subdomain to Cloudflare's nameservers, using Cloudflare as your primary DNS provider
            is generally recommended to fully utilize all the services and features we offer.</p>
        <a href="/subject3" class="cta-button">Previous</a>
        <a href="/subject5" class="cta-button">Next</a>
    
    </section>
    
    <section class="hero">
    </section></div>

    );
};

export default Subject4;
