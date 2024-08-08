// src/pages/Subject1.js
import React from 'react';

const Subject6 = () => {
    return (
        <div>
          <section class="hero">
    <h1>Subject 6</h1>

    <h1>Response to: User Agent Redirect Request</h1>
    <p>Dear Customer,</p>
    <p>Thank you for reaching out with your request to redirect visitors based on the user agent. You are correct that
        Cloudflare's standard Page Rules do not currently support redirections based on user agents directly. However,
        you can achieve this functionality using Cloudflare Workers.</p>
    <p>Thought Process:</p>
    <p>Considering the limitation of Page Rules, I thought of Cloudflare Workers as a flexible and powerful solution
        that allows you to run JavaScript at the edge, which can inspect incoming requests and modify responses or
        redirects based on criteria like the user agent.</p>
    <p>Tools Used:</p>
    <ul>
        <li>Cloudflare Workers: This tool allows you to write and deploy JavaScript that executes directly on
            Cloudflare's edge nodes. You can write a script to check the User-Agent header of incoming requests and
            perform a redirect if it matches a specific pattern.
        </li>
    </ul>
    <a href="/subject5" class="cta-button">Previous</a>
    <a href="/" class="cta-button">Home</a>

</section>

<section class="hero">
</section>        </div>
    );
};

export default Subject6;
