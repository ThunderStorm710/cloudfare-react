// src/pages/Subject1.js
import React from 'react';

const Subject3 = () => {
    return (
        <div><section class="hero">
        <h1>Subject 3</h1>
    
        <h1>Response to: Workers Not Applied</h1>
        <p>Dear Customer,</p>
        <p>Thank you for setting up a Worker on your website and reaching out about the issues with its deployment. It's
            great to hear it works in the debugger, but let’s make sure it runs correctly on the live site too.</p>
        <p>Thought Process:</p>
        <p>My immediate thought was to ensure that the Worker script is deployed correctly and that there are no
            environmental differences between the debugger and the live environment.</p>
        <p>Tools Used:</p>
        <ul>
            <li>Cloudflare Dashboard: To check the Workers section and ensure the script is associated with the correct
                route(s).
            </li>
            <li>Network tools (like curl or browser DevTools): To test the Worker’s functionality by simulating requests
                that should trigger the Worker.
            </li>
        </ul>
        <p>Please make sure that the route configured in your Cloudflare dashboard matches the requests made to your website
            exactly. If the issue remains, we might need to look into specific logs or further configurations.</p>
        <a href="/subject2" class="cta-button">Previous</a>
        <a href="/subject4" class="cta-button">Next</a>
    
    </section>
    
    <section class="hero">
    </section></div>
    
    );
};

export default Subject3;
