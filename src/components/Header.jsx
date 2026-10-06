import { useEffect, useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    // Change header style when scrolling
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 30);
        };

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // Lock page scroll when mobile menu is open
    useEffect(() => {
        document.body.classList.toggle("no-scroll", menuOpen);

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [menuOpen]);

    // Close mobile menu on desktop screen
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1100) {
                setMenuOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Detect the current section while scrolling
    useEffect(() => {
        const sections = document.querySelectorAll("main section[id]");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-40% 0px -50% 0px",
                threshold: 0,
            }
        );

        sections.forEach((section) => {
            observer.observe(section);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header
            className={`site-header ${scrolled ? "scrolled" : ""}`}
            id="siteHeader"
        >
            <div className="container nav-wrap">
                <a
                    href="#home"
                    className="brand"
                    aria-label="Manjaws home"
                    onClick={closeMenu}
                >
                    <span className="brand-mark">EM</span>
                    <span className="brand-text">Engr Manjaws</span>
                </a>

                <nav
                    className="desktop-nav"
                    aria-label="Primary navigation"
                >
                    <a
                        href="#home"
                        className={`nav-link ${activeSection === "home" ? "active" : ""
                            }`}
                    >
                        Home
                    </a>

                    <a
                        href="#about"
                        className={`nav-link ${activeSection === "about" ? "active" : ""
                            }`}
                    >
                        About
                    </a>

                    <a
                        href="#skills"
                        className={`nav-link ${activeSection === "skills" ? "active" : ""
                            }`}
                    >
                        Skills
                    </a>

                    <a
                        href="#projects"
                        className={`nav-link ${activeSection === "projects" ? "active" : ""
                            }`}
                    >
                        Projects
                    </a>

                    <a
                        href="#experience"
                        className={`nav-link ${activeSection === "experience" ? "active" : ""
                            }`}
                    >
                        Experience
                    </a>

                    <a
                        href="#contact"
                        className={`nav-link ${activeSection === "contact" ? "active" : ""
                            }`}
                    >
                        Contact
                    </a>
                </nav>

                <div className="nav-actions">
                    <a
                        className="nav-cta"
                        href="#contact"
                    >
                        Let’s Connect
                    </a>

                    <button
                        className={`menu-toggle ${menuOpen ? "open" : ""
                            }`}
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={
                            menuOpen ? "Close menu" : "Open menu"
                        }
                        aria-expanded={menuOpen}
                        aria-controls="mobileNav"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </div>

            <nav
                className={`mobile-nav ${menuOpen ? "open" : ""
                    }`}
                id="mobileNav"
                aria-label="Mobile navigation"
            >
                <a
                    href="#home"
                    onClick={closeMenu}
                    className={
                        activeSection === "home" ? "active" : ""
                    }
                >
                    Home
                </a>

                <a
                    href="#about"
                    onClick={closeMenu}
                    className={
                        activeSection === "about" ? "active" : ""
                    }
                >
                    About
                </a>

                <a
                    href="#skills"
                    onClick={closeMenu}
                    className={
                        activeSection === "skills" ? "active" : ""
                    }
                >
                    Skills
                </a>

                <a
                    href="#projects"
                    onClick={closeMenu}
                    className={
                        activeSection === "projects" ? "active" : ""
                    }
                >
                    Projects
                </a>

                <a
                    href="#experience"
                    onClick={closeMenu}
                    className={
                        activeSection === "experience" ? "active" : ""
                    }
                >
                    Experience
                </a>

                <a
                    href="#contact"
                    onClick={closeMenu}
                    className={
                        activeSection === "contact" ? "active" : ""
                    }
                >
                    Contact
                </a>
            </nav>
        </header>
    );
}

export default Header;