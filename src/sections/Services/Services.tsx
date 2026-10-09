

import "./Services.css";

const services = [
  "Architecture",
  "Interior Design",
  "Space Planning",
  "Furniture & Styling",
];

export default function Services() {
  return (
    <section id="services" className="services-section">
      <p className="services-eyebrow">03 / WHAT WE DO</p>
      <h2>From vision to reality.</h2>

      <div className="services-list">
        {services.map((service, index) => (
          <div className="service-item" key={service}>
            <span>0{index + 1}</span>
            <h3>{service}</h3>
            <span aria-hidden="true">↗</span>
          </div>
        ))}
      </div>
    </section>
  );
}
