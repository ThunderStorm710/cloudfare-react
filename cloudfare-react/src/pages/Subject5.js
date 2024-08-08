// src/pages/Subject1.js
import React from 'react';

const Subject5 = () => {
    return (
        <div>
           <section class="hero">
    <h1>Subject 5</h1>
    <h1>Response to: Content Not Being Cached</h1>
    <p>Dear Customer,</p>
    <p>I see that you’re facing issues with caching on your website. Based on the curl output you provided, it looks
        like your server is sending headers that instruct browsers and other clients to not cache the page
        (Cache-Control: no-store, no-cache).</p>
    <p>Thought Process:</p>
    <p>Identifying the problem was straightforward from the curl output. The headers clearly prevent caching, so the
        solution involves adjusting these settings.</p>
    <p>Tools Used:</p>
    <ul>
        <li>Cloudflare Page Rules: To potentially override cache headers for specific URLs or website sections.</li>
        <li>Server configuration files: To adjust the headers sent from your server.</li>
    </ul>
    <p>Please review your server's configuration to modify these headers, or we can explore using Cloudflare Page Rules
        to alter caching behavior. Let me know how you'd like to proceed!</p>
    <p>If any further information or assistance is needed, feel free to reach out. Our goal is to ensure your services
        run smoothly and efficiently!</p>
    <a href="/subject4" class="cta-button">Previous</a>
    <a href="/subject6" class="cta-button">Next</a>

</section>

<section class="hero">
</section>        </div>
    );
};

export default Subject5;
