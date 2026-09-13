function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>

      <div className="contact-card">
        <p className="contact-line">
          <strong>Email:</strong>{' '}
          <a href="mailto:your@email.com">arifnawaz422@email.com</a>
        </p>

        <p className="contact-line">
          <strong>LinkedIn:</strong>{' '}
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
            linkedin.com/in/zeedott
          </a>
        </p>

        <p className="contact-line">
          <strong>GitHub:</strong>{' '}
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            github.com/zeedott
          </a>
        </p>

        <a className="contact-cta" href="mailto:your@email.com">
          Send a message
        </a>
      </div>
    </section>
  );
}

export default Contact;