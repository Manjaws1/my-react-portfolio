import { useState } from "react";

function Project() {
    const [filter, setFilter] = useState("all");

    const showProject = (categories) => {
        return (
            filter === "all" ||
            categories.includes(filter)
        );
    };

    return (
        <section
            className="projects section"
            id="projects"
        >
            <div className="container">

                <div className="section-heading">
                    <p className="section-tag">
                        SELECTED WORK
                    </p>

                    <h2>
                        Projects built around real technical problems.
                    </h2>
                </div>

                <div
                    className="project-filter"
                    aria-label="Project filters"
                >
                    <button
                        className={`filter-btn ${filter === "all" ? "active" : ""
                            }`}
                        onClick={() => setFilter("all")}
                    >
                        All
                    </button>

                    <button
                        className={`filter-btn ${filter === "security" ? "active" : ""
                            }`}
                        onClick={() => setFilter("security")}
                    >
                        Security
                    </button>

                    <button
                        className={`filter-btn ${filter === "dev" ? "active" : ""
                            }`}
                        onClick={() => setFilter("dev")}
                    >
                        Development
                    </button>

                    <button
                        className={`filter-btn ${filter === "systems" ? "active" : ""
                            }`}
                        onClick={() => setFilter("systems")}
                    >
                        Systems
                    </button>

                    <button
                        className={`filter-btn ${filter === "ai" ? "active" : ""
                            }`}
                        onClick={() => setFilter("ai")}
                    >
                        AI
                    </button>
                </div>

                <div className="projects-grid">

                    {showProject(["security", "ai"]) && (
                        <article className="project-card">
                            <div className="project-media project-media-1">
                                <span>
                                    Cybersecurity + ML
                                </span>
                            </div>

                            <div className="project-body">
                                <div className="project-topline">
                                    <span>Security</span>
                                    <span>01</span>
                                </div>

                                <h3>
                                    AI-Based Phishing Email Detection
                                </h3>

                                <p>
                                    A machine-learning system that
                                    classifies email subject and body
                                    text using TF-IDF features and
                                    multiple classification models.
                                </p>

                                <div className="tech-list">
                                    <span>Python</span>
                                    <span>TF-IDF</span>
                                    <span>Machine Learning</span>
                                </div>

                                <div className="project-links">
                                    <a href="#">
                                        GitHub ↗
                                    </a>

                                    <a href="#">
                                        Live Demo ↗
                                    </a>
                                </div>
                            </div>
                        </article>
                    )}

                    {showProject(["security", "systems"]) && (
                        <article className="project-card">
                            <div className="project-media project-media-2">
                                <span>
                                    Risk Engineering
                                </span>
                            </div>

                            <div className="project-body">
                                <div className="project-topline">
                                    <span>Security</span>
                                    <span>02</span>
                                </div>

                                <h3>
                                    Cybersecurity Risk Scoring System
                                </h3>

                                <p>
                                    A small-business risk assessment
                                    platform that scores assets,
                                    vulnerabilities, misconfigurations
                                    and security practices from 0 to
                                    100.
                                </p>

                                <div className="tech-list">
                                    <span>Security</span>
                                    <span>JSON</span>
                                    <span>Web UI</span>
                                </div>

                                <div className="project-links">
                                    <a
                                        href="https://github.com/Manjaws1/Cyber-Security-Risk-Scoring-System.git"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub ↗
                                    </a>
                                </div>
                            </div>
                        </article>
                    )}

                    {showProject(["dev", "systems"]) && (
                        <article className="project-card">
                            <div className="project-media project-media-3">
                                <span>
                                    Go Web Application
                                </span>
                            </div>

                            <div className="project-body">
                                <div className="project-topline">
                                    <span>Development</span>
                                    <span>03</span>
                                </div>

                                <h3>ASCII Studio</h3>

                                <p>
                                    A Go-based ASCII art application
                                    with alignment, color control,
                                    banner selection, export support
                                    and a browser interface.
                                </p>

                                <div className="tech-list">
                                    <span>Go</span>
                                    <span>Docker</span>
                                    <span>HTML/CSS</span>
                                </div>

                                <div className="project-links">
                                    <a
                                        href="https://github.com/Manjaws1/ASCII-Studio.git"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub ↗
                                    </a>

                                    <a
                                        href="https://ascii-studio.onrender.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo ↗
                                    </a>
                                </div>
                            </div>
                        </article>
                    )}

                    {showProject(["dev", "systems"]) && (
                        <article className="project-card">
                            <div className="project-media project-media-4">
                                <span>
                                    Web Development / Digital Platform
                                </span>
                            </div>

                            <div className="project-body">
                                <div className="project-topline">
                                    <span>Development</span>
                                    <span>04</span>
                                </div>

                                <h3>Manjaws Datahub</h3>

                                <p>
                                    Manjaws Datahub is a digital
                                    platform built to provide access
                                    to useful technology services,
                                    digital resources, and online
                                    solutions in one place.
                                </p>

                                <div className="tech-list">
                                    <span>HTML</span>
                                    <span>CSS</span>
                                    <span>JavaScript</span>
                                    <span>Netlify</span>
                                </div>

                                <div className="project-links">
                                    <a
                                        href="https://www.manjawsdatahub.name.ng"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Website ↗
                                    </a>
                                </div>
                            </div>
                        </article>
                    )}

                    {showProject(["dev", "systems"]) && (
                        <article className="project-card">
                            <div className="project-media project-media-5">
                                <span>
                                    Workspace Platform
                                </span>
                            </div>

                            <div className="project-body">
                                <div className="project-topline">
                                    <span>Platform</span>
                                    <span>05</span>
                                </div>

                                <h3>
                                    Manjaws Workplace
                                </h3>

                                <p>
                                    A coworking platform with
                                    role-based access, booking
                                    management, announcements,
                                    payment workflows and workspace
                                    administration.
                                </p>

                                <div className="tech-list">
                                    <span>React</span>
                                    <span>Supabase</span>
                                    <span>RBAC</span>
                                </div>

                                <div className="project-links">
                                    <a href="#">
                                        GitHub ↗
                                    </a>

                                    <a
                                        href="https://manjaws-workplace.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Live Demo ↗
                                    </a>
                                </div>
                            </div>
                        </article>
                    )}

                </div>
            </div>
        </section>
    );
}

export default Project;