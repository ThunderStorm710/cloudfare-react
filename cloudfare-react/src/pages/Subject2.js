// src/pages/Subject1.js
import React from 'react';

const Subject2 = () => {
    return (
        <div>
<section class="hero">
    <h1>Subject 2</h1>
    <h1>Why is my site coming from California?!</h1>
    <p>Dear Customer,</p>
    <p>Thank you for your inquiry about the geographical source of your website's content. Cloudflare uses the Anycast network, which means that your website is served from various data centres around the world. Although you are in London, it is common to see the IP address registered in California (or other locations) as many of our IP addresses are registered in the US. This allows requests to your website to be routed to the nearest data center in terms of Internet topology, not necessarily geographic distance which means that even if an IP address appears to be located in California as you stated, it doesn't necessarily mean that the content is being served from there.</p>
    <p>Thought Process:</p>
    <p>Recognising that Cloudflare employs Anycast technology is critical. Understanding it helps to understand why the consumer may notice their site being delivered from an IP address registered in California.

    Understanding that IP addresses are frequently registered to the company's headquarters, which in this case is in California, explains why the IP address may not correspond to the physical location of the data centre hosting the content.

</p>
    <p>Tools Used:</p>
    <ul>
        <li>Cloudflare Analytics: This would help to show from which data centers the website's traffic is being served, confirming that local data centers are being utilized.
        </li>
    </ul>
    <p>I hope this has addressed your worries. If you need more information on how traffic is routed to your website, we are here to help!</p>
    <a href="/subject1" class="cta-button">Previous</a>
    <a href="/subject3" class="cta-button">Next</a>

</section>

<section class="hero">
</section></div>
    );
};

export default Subject2;
