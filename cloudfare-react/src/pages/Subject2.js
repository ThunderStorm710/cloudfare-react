// src/pages/Subject1.js
import React from 'react';

const Subject2 = () => {
    return (
        <div>
<section class="hero">
    <h1>Subject 2</h1>
    <h1>Response to: Why is my site coming from California?!</h1>
    <p>Dear Customer,</p>
    <p>Thank you for your query regarding the geographical sourcing of your website's content. Cloudflare operates on an
        Anycast network, which means that your website is served from multiple data centers around the world. While you
        are in London, the IP address you see might be registered in California, which is typical since many of our IP
        addresses are US-registered.</p>
    <p>Thought Process:</p>
    <p>I considered the possibility of a localized issue affecting DNS resolution or propagation delays which might be
        causing the website to be inaccessible from different networks. My plan is to review the DNS configuration in
        your Cloudflare account to ensure all settings are correct and to check if the DNS records are fully
        propagated.</p>
    <p>Tools Used:</p>
    <ul>
        <li>Cloudflare Analytics: This would help to show from which data centers your website's traffic is being
            served, confirming that local data centers are being utilized.
        </li>
        <li>Geolocation tools: To explain how IP geolocation might not always reflect the actual physical serving
            location due to the nature of IP address registration.
        </li>
    </ul>
    <p>I hope this clarifies your concerns. If you need more detailed information on how traffic is routed for your
        site, I'm here to help!</p>
    <a href="/subject1" class="cta-button">Previous</a>
    <a href="/subject3" class="cta-button">Next</a>

</section>

<section class="hero">
</section></div>
    );
};

export default Subject2;
