import { useState } from "react";

function Contact() {
  const portfolioEmail = "gbenlekamolideen@gmail.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    subject: false,
    message: false,
  });

  const [formStatus, setFormStatus] = useState({
    message: "",
    type: "",
  });

  const validateField = (name, value) => {
    const cleanValue = value.trim();

    if (name === "name") {
      if (!cleanValue) {
        return "Please enter your name.";
      }

      if (cleanValue.length < 2) {
        return "Name must contain at least 2 characters.";
      }
    }

    if (name === "email") {
      const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!cleanValue) {
        return "Please enter your email address.";
      }

      if (!emailPattern.test(cleanValue)) {
        return "Please enter a valid email address.";
      }
    }

    if (name === "subject") {
      if (!cleanValue) {
        return "Please enter a subject.";
      }

      if (cleanValue.length < 3) {
        return "Subject must contain at least 3 characters.";
      }
    }

    if (name === "message") {
      if (!cleanValue) {
        return "Please enter your message.";
      }

      if (cleanValue.length < 10) {
        return "Message must contain at least 10 characters.";
      }
    }

    return "";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (touched[name]) {
      setErrors((previousErrors) => ({
        ...previousErrors,
        [name]: validateField(name, value),
      }));
    }

    setFormStatus({
      message: "",
      type: "",
    });
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    setTouched((previousTouched) => ({
      ...previousTouched,
      [name]: true,
    }));

    setErrors((previousErrors) => ({
      ...previousErrors,
      [name]: validateField(name, value),
    }));
  };

  const getInputClass = (name) => {
    if (!touched[name]) {
      return "";
    }

    if (errors[name]) {
      return "input-error";
    }

    if (formData[name].trim()) {
      return "input-success";
    }

    return "";
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      subject: validateField("subject", formData.subject),
      message: validateField("message", formData.message),
    };

    setErrors(newErrors);

    setTouched({
      name: true,
      email: true,
      subject: true,
      message: true,
    });

    const formIsValid =
      !newErrors.name &&
      !newErrors.email &&
      !newErrors.subject &&
      !newErrors.message;

    if (!formIsValid) {
      setFormStatus({
        message: "Please correct the highlighted fields.",
        type: "error",
      });

      return;
    }

    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    const emailSubject = encodeURIComponent(
      `${subject} - Portfolio message from ${name}`
    );

    const emailBody = encodeURIComponent(
      `Hello Manjaws,

You received a new message from your portfolio website.

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Regards,
${name}`
    );

    setFormStatus({
      message:
        "Your message is ready. Opening your email application...",
      type: "success",
    });

    setTimeout(() => {
      window.location.href =
        `mailto:${portfolioEmail}` +
        `?subject=${emailSubject}` +
        `&body=${emailBody}`;
    }, 500);
  };

  return (
    <section
      className="contact section section-dark"
      id="contact"
    >
      <div className="container">
        <div className="contact-grid">

          <div className="contact-copy">
            <p className="section-tag">
              CONTACT
            </p>

            <h2>
              Let’s build something useful.
            </h2>

            <p>
              I’m open to DevOps, cloud,
              cybersecurity, software development
              and AI automation opportunities.
            </p>

            <div className="contact-details">

              <a href="mailto:gbenlekamolideen@gmail.com">
                <span>Email</span>
                <strong>
                  gbenlekamolideen@gmail.com
                </strong>
              </a>

              <a
                href="https://github.com/Manjaws1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>

                <strong>
                  github.com/Manjaws1
                </strong>
              </a>

              <a
                href="https://www.linkedin.com/in/gbenle-kamolideen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>LinkedIn</span>

                <strong>
                  Gbenle Kamolideen
                </strong>
              </a>

            </div>
          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="form-row">

              <label>
                Name

                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClass("name")}
                />

                <small className="field-error">
                  {errors.name}
                </small>
              </label>

              <label>
                Email

                <input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={getInputClass("email")}
                />

                <small className="field-error">
                  {errors.email}
                </small>
              </label>

            </div>

            <label>
              Subject

              <input
                type="text"
                name="subject"
                placeholder="Project or opportunity"
                value={formData.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass("subject")}
              />

              <small className="field-error">
                {errors.subject}
              </small>
            </label>

            <label>
              Message

              <textarea
                name="message"
                rows={6}
                placeholder="Tell me what you want to build..."
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={getInputClass("message")}
              />

              <small className="field-error">
                {errors.message}
              </small>
            </label>

            <button
              className="btn btn-primary"
              type="submit"
            >
              Send Message
            </button>

            {formStatus.message && (
              <p
                className={`form-status ${formStatus.type}`}
                aria-live="polite"
              >
                {formStatus.message}
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;