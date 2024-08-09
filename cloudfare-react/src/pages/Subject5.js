// src/pages/Subject1.js
import React from 'react';

const Subject5 = () => {
    return (
        <div>
           <section class="hero">
    <h1>Subject 5</h1>
    <h1>Content Not Being Cached</h1>
    <p>Dear Customer,</p>
    <p>Thank you for reaching out to us where the issues you're facing regarding the caching on your website. Taking into account the output you provided, it looks like your server is sending headers along with each request that instructs browsers and clients not to cache the page "Cache-Control: no-store, no-cache".</p>
    <p>Thought Process:</p>
    <p>The problem seems straightforward from the curl output. The headers don't allow caching, so the solution involves adjusting or removing these settings.</p>
    <p>Tools Used:</p>
    <ul>
        <li>Server configuration files: In order to adjust the headers sent from the server.</li>
        <li>Cloudflare Page Rules: May be needed to override cache headers for specific URLs or website sections.</li>
    </ul>
    <p>Please review your server's setup to amend these headers, or let us know if you need us to try and utilise Cloudflare Page Rules to change caching behaviour. Let us know how you prefer to proceed!</p>
    <p>Please contact us if you require any additional information or support.</p>
    <a href="/subject4" class="cta-button">Previous</a>
    <a href="/subject6" class="cta-button">Next</a>

</section>

<section class="hero">
</section>        </div>
    );
};

export default Subject5;
