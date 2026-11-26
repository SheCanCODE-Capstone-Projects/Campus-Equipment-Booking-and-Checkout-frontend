export default function ServicesSection() {
  return (
    <section className="services-section section-padding" id="equipment">
      <div className="section-heading reveal">
        <span className="section-eyebrow">WHAT WE PROVIDE</span>
        <h2>
          The right support for
          <span> every milestone.</span>
        </h2>
        <p>
          Explore the resources available to help make your learning and
          graduation experience easier.
        </p>
      </div>

      <div className="services-grid">
        <article className="service-card laptop-service reveal">
          <div className="service-card-top">
            <span className="service-number">01 / EQUIPMENT</span>
            <span className="service-symbol">↗</span>
          </div>

          <div className="service-icon">▱</div>

          <h3>Laptop Lending</h3>

          <p>
            Get access to laptops that support your coursework, digital
            learning, and project development.
          </p>

          <a href="#student-hub" className="service-link">
            Explore laptop access <span>→</span>
          </a>
        </article>

        <article className="service-card gown-service reveal" id="gowns">
          <div className="service-card-top">
            <span className="service-number">02 / GRADUATION</span>
            <span className="service-symbol">↗</span>
          </div>

          <div className="service-icon">✦</div>

          <h3>Graduation Gowns</h3>

          <p>
            Prepare for your special day with access to graduation gowns
            as you celebrate your achievements.
          </p>

          <a href="#student-hub" className="service-link">
            Explore gown access <span>→</span>
          </a>
        </article>
      </div>
    </section>
  )
}