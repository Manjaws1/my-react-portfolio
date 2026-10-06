function SKill() {
    return (
        <section className="skills section section-dark" id="skills">
            <div className="container">
                <div className="section-heading section-heading-light ">
                    <p className="section-tag">CORE SKILLS</p>
                    <h2>Tools and technologies I work with.</h2>
                    <p>
                        I am building depth across infrastructure, software engineering,
                        networking, security and automation.
                    </p>
                </div>
                <div className="skill-grid">
                    <article className="skill-card ">
                        <div className="skill-number">01</div>
                        <h3>DevOps &amp; Cloud</h3>
                        <ul>
                            <li>Linux Administration</li>
                            <li>Git &amp; GitHub</li>
                            <li>Docker</li>
                            {/* <li>CI/CD</li> */}
                            <li>Cloud Fundamentals</li>
                            {/* <li>Infrastructure Automation</li> */}
                        </ul>
                    </article>
                    <article className="skill-card ">
                        <div className="skill-number">02</div>
                        <h3>Cybersecurity</h3>
                        <ul>
                            <li>Network Security</li>
                            <li>Risk Assessment</li>
                            {/* <li>File Integrity Monitoring</li> */}
                            <li>Phishing Detection</li>
                            {/* <li>Security Controls</li> */}
                            <li>Secure System Design</li>
                        </ul>
                    </article>
                    <article className="skill-card ">
                        <div className="skill-number">03</div>
                        <h3>Software Development</h3>
                        <ul>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>Go</li>
                            <li>Python</li>
                            {/* <li>REST APIs</li> */}
                        </ul>
                    </article>
                    <article className="skill-card ">
                        <div className="skill-number">04</div>
                        <h3>AI &amp; Automation</h3>
                        <ul>
                            <li>AI Workflow Automation</li>
                            <li>AI Agents</li>
                            <li>Prompt Engineering</li>
                            <li>AI Video Workflows</li>
                            <li>Automation Strategy</li>
                            <li>Rapid Prototyping</li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>

    );
}

export default SKill