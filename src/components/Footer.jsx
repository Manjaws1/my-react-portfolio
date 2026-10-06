function Footer() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div>
                    <a href="#home" className="brand footer-brand">
                        <span className="brand-mark">EM</span>
                        <span className="brand-text">Engr MANJAWS</span>
                    </a>
                    <p>
                        DevOps, Cloud, Cybersecurity, Software Engineering and AI Automation.
                    </p>
                </div>
                <div className="footer-links">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#experience">Experience</a>
                    <a href="#contact">Contact</a>
                </div>
                <p className="copyright">
                    © <span id="currentYear" /> Manjaws. Built with HTML, CSS and JavaScript.
                </p>
            </div>
        </footer>

    )
}

export default Footer