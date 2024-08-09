// src/pages/Subject1.js
import React from 'react';

const Subject6 = () => {
    return (
        <div>
          <section class="hero">
    <h1>Subject 6</h1>

    <h1>User Agent Redirect Request</h1>
    <p>Dear Customer,</p>
    <p>Thank you for contacting us with your request to redirect visitors depending on their user agent. Although, Cloudflare's standard Page Rules do not support user agent-based redirections, you can implement this feature with Cloudflare Workers.</p>
    <p>Thought Process:</p>
    <p>Given the limitations of Page Rules and knowing that Workers are a versatile and powerful, they may come across as a solution that allows to run JavaScript at the edge, inspecting incoming requests and modifying replies or redirection based on factors such as the user agent.</p>
    <p>Tools Used:</p>
    <ul>
        <li>Cloudflare Workers: Allows to write and deploy JavaScript that executes directly on Cloudflare's edge nodes.
        </li>
    </ul>
    <p>If you need help or have other questions, please don’t hesitate to ask us.</p>
    <a href="/subject5" class="cta-button">Previous</a>
    <a href="/" class="cta-button">Home</a>

</section>

<section class="hero">
</section>        </div>
    );
};

export default Subject6;
