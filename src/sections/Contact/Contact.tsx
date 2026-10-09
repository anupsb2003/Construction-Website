
import "./Contact.css";

export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <p className="contact-eyebrow">04 / START A CONVERSATION</p>
      <h2>Let's create something meaningful.</h2>

      <a className="contact-link" href="mailto:hello@example.com">
        Get in touch <span>↗</span>
      </a>

      <footer className="contact-footer">
        <span>FORMA — Architecture & Interiors</span>
        <span>© 2026 FORMA</span>
      </footer>
    </section>
  );
}
