import profileImage from "../assets/images/profile.jpeg";

function Hero() {
    return (
        <section className="hero section" id="home">
            <div className="container hero-grid">

                <div className="hero-copy">

                    <p className="eyebrow">
                        DEVOPS • CLOUD • CYBERSECURITY • AI
                    </p>

                    <h1>
                        Building secure systems,
                        <span> automating workflows </span>
                        and shipping useful software.
                    </h1>

                    <p className="hero-text">
                        I’m Gbenle Kamolideen Ajibola, also known as Manjaws.
                        I focus on DevOps, cloud infrastructure, cybersecurity,
                        software engineering, and AI automation.
                    </p>

                    <div className="hero-actions">

                        <a
                            className="btn btn-primary"
                            href="#projects"
                        >
                            View Projects
                        </a>

                        <a
                            className="btn btn-secondary"
                            href="/resume/Gbenle_Kamolideen.docx"
                            download
                        >
                            Download CV
                        </a>

                    </div>

                    <div className="hero-meta">

                        <div>
                            <strong>Abuja, Nigeria</strong>
                            <span>
                                Available for remote and hybrid work
                            </span>
                        </div>

                        <div>
                            <strong>Open to collaboration</strong>
                            <span>
                                DevOps, Cloud, Software Development, and AI
                            </span>
                        </div>

                    </div>
                </div>

                <div className="hero-visual">

                    <div className="portrait-frame">

                        <img
                            className="profile-image"
                            src={profileImage}
                            alt="Gbenle Kamolideen Ajibola"
                        />

                        <div className="floating-card experience-card">
                            <strong>3+</strong>
                            <span>Years using Linux</span>
                        </div>

                        <div className="floating-card role-card">

                            <span className="status-dot"></span>

                            <div>
                                <strong>Current Focus</strong>
                                <small>
                                    DevOps &amp; Cloud Engineering
                                </small>
                            </div>

                        </div>

                    </div>

                    <div
                        className="hero-pattern"
                        aria-hidden="true"
                    ></div>

                </div>

            </div>
        </section>
    );
}

export default Hero;