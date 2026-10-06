import { useEffect, useRef, useState } from "react";

function About() {
    const statsRef = useRef(null);

    const [startCounters, setStartCounters] = useState(false);

    useEffect(() => {
        const statsSection = statsRef.current;

        if (!statsSection) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setStartCounters(true);
                    observer.unobserve(statsSection);
                }
            },
            {
                threshold: 0.5,
            }
        );

        observer.observe(statsSection);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section
            className="about section section-soft"
            id="about"
        >
            <div className="container">
                <div className="about-intro">
                    <div>
                        <p className="section-tag">
                            ABOUT ME
                        </p>

                        <h2>
                            I combine infrastructure, security
                            and software thinking.
                        </h2>
                    </div>

                    <div>
                        <p>
                            I am a Network Technology and Cyber
                            Security student with a strong
                            interest in DevOps and cloud
                            computing. My work spans Linux,
                            automation, software systems,
                            cybersecurity tools, web applications
                            and AI-driven workflows.
                        </p>

                        <p>
                            I enjoy learning by building. My
                            projects focus on solving practical
                            problems with clear architecture,
                            usable interfaces and secure
                            engineering decisions.
                        </p>
                    </div>
                </div>

                <div
                    className="stats-grid"
                    ref={statsRef}
                >
                    <article className="stat-card">
                        <Counter
                            target={10}
                            suffix="+"
                            start={startCounters}
                        />

                        <span>Projects Built</span>
                    </article>

                    <article className="stat-card">
                        <Counter
                            target={3}
                            suffix="+"
                            start={startCounters}
                        />

                        <span>Years Using Linux</span>
                    </article>

                    <article className="stat-card">
                        <Counter
                            target={5}
                            suffix="+"
                            start={startCounters}
                        />

                        <span>Technical Focus Areas</span>
                    </article>

                    <article className="stat-card">
                        <Counter
                            target={100}
                            suffix="%"
                            start={startCounters}
                        />

                        <span>Learning Mindset</span>
                    </article>
                </div>
            </div>
        </section>
    );
}

function Counter({
    target,
    suffix = "",
    start,
}) {
    const [value, setValue] = useState(0);

    useEffect(() => {
        if (!start) return;

        const duration = 1400;
        const startTime = performance.now();

        const updateCounter = (currentTime) => {
            const elapsed =
                currentTime - startTime;

            const progress = Math.min(
                elapsed / duration,
                1
            );

            const easedProgress =
                1 - Math.pow(1 - progress, 3);

            const currentValue = Math.round(
                target * easedProgress
            );

            setValue(currentValue);

            if (progress < 1) {
                requestAnimationFrame(
                    updateCounter
                );
            }
        };

        requestAnimationFrame(
            updateCounter
        );
    }, [start, target]);

    return (
        <strong className="counter">
            {value}
            {suffix}
        </strong>
    );
}

export default About;