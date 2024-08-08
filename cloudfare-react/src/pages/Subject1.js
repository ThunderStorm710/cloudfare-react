// src/pages/Subject1.js
import React from 'react';

const Subject1 = () => {
    return (
        <div>
         <section class="hero">
    <h1>Subject 1</h1>
    <h1>Response to: Site Down, Your Name Servers Are Down</h1>
    <p>Dear Customer,</p>
    <p>Thank you for reaching out to us regarding the issue you're experiencing with accessing your website. I understand how critical it is to ensure your site is always available. I've checked the status of our nameservers and they are operational with no reported outages. However, to troubleshoot your specific issue, I will look into your DNS settings to see if there are any misconfigurations or propagation delays.</p>
    <p>Thought Process:</p>
    <p>I considered the possibility of a localized issue affecting DNS resolution or propagation delays which might be causing the website to be inaccessible from different networks. My plan is to review the DNS configuration in your Cloudflare account to ensure all settings are correct and to check if the DNS records are fully propagated.</p>
    <p>Tools Used:</p>
    <ul>
        <li>Cloudflare Dashboard: To access and review your DNS configurations and check for any alerts or misconfigurations.</li>
        <li>DNS Propagation Checker: This helps to verify if your DNS changes have fully propagated across the internet.</li>
        <li>Ping and Traceroute: These tools help determine the connectivity and the path taken to reach your website from different networks.</li>
    </ul>
    <p>If after these checks everything appears normal but the issue persists, I might suggest clearing DNS cache or investigating further with more specific network details you can provide.</p>
    <a href="/" class="cta-button">Previous</a>
    <a href="/subject2" class="cta-button">Next</a>

</section>

<section class="hero">
</section>        </div>
    );
};

export default Subject1;
