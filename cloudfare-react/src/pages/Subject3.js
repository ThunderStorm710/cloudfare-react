// src/pages/Subject1.js
import React from 'react';

const Subject3 = () => {
    return (
        <div><section class="hero">
        <h1>Subject 3</h1>
    
        <h1>Workers Not Applied</h1>
        <p>Dear Customer,</p>
        <p>Thank you for creating a Worker and informing us about the challenges with its deployment. As it works in the debugger you should not be that far from completing your objective. Let's now ensure it functions well on the live site.</p>
        <p>Thought Process:</p>
        <p>My first idea was to make sure that the Worker script was properly deployed and that there were no environmental variations between the debugger and the live environment.</p>
        <p>Tools Used:</p>
        <ul>
            <li>Cloudflare Dashboard: So as to check the Workers section and verify if the script is associated with the correct route(s).
            </li>
            <li>Network tools (curl, p.e.): To test the Worker’s functionality by simulating requests that should trigger the Worker.
            </li>
        </ul>
        <p>Please verify if the route configured in your Cloudflare dashboard matches the requests made to your website. If this problem continues, I would advise you to take look into specific the logs or further configurations and send them so that we can help you in a better way.</p>
        <a href="/subject2" class="cta-button">Previous</a>
        <a href="/subject4" class="cta-button">Next</a>
    
    </section>
    
    <section class="hero">
    </section></div>
    
    );
};

export default Subject3;
