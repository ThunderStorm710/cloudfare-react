// src/pages/Subject1.js
import React from 'react';

const Subject1 = () => {
    return (
        <div>
         <section class="hero">
    <h1>Subject 1</h1>
    <h1>Site Down, Your Name Servers Are Down</h1>
    <p>Dear Customer,</p>

    <p>Thank you for contacting us about your issue. I checked the status of our nameservers and they are working, with no reported outages. Nonetheless, in order to resolve your specific issue, I will examine your DNS settings to determine if there are any misconfigurations or propagation delays.</p>
    <p>Thought Process:</p>
    <p>I considered exploring the possibility of a localised issue with DNS resolution or propagation delays, which could be causing the website to be unreachable from certain networks. My aim is to verify your Cloudflare account's DNS configuration to ensure that all settings are proper and that the DNS records are fully propagated.</p>
    <p>Tools Used:</p>
    <ul>
        <li>Cloudflare Dashboard: To review DNS configurations and check for alerts or misconfigurations.</li>
        <li>Ping and Traceroute: Standard tools that help determine the connectivity and the path taken to reach your website from different networks.</li>
        <li>DNS Propagation Checker: This helps verify if DNS changes have fully propagated across the internet.</li>
    </ul>
    <p>If everything appears fine after these checks but the problem persists, I would recommend clearing DNS cache or looking into it further with more particular network information provided by the client.</p>
    <a href="/" class="cta-button">Previous</a>
    <a href="/subject2" class="cta-button">Next</a>

</section>

<section class="hero">
</section>        </div>
    );
};

export default Subject1;
