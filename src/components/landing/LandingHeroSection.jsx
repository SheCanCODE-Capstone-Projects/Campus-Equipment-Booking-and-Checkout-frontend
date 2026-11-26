
export default function LandingHeroSection() {
  return (
    <section className="landing-hero" id="home">
      <div className="hero-background-shape" />

      <div className="landing-hero-content">
        <div className="hero-text reveal">
          <span className="hero-eyebrow">
            <span /> IGIRE RWANDA ORGANIZATION
          </span>

          <h1>
            Empowering Students
            <span> With the Right Tools</span>
            for Their Journey.
          </h1>

          <p>
            Access the equipment and graduation resources you need to learn,
            grow, and take your next step with confidence.
          </p>

          <div className="hero-actions">
            <a href="#equipment" className="primary-button">
              Explore Equipment <span>↗</span>
            </a>

            <a href="#how-it-works" className="secondary-button">
              Discover How It Works
            </a>
          </div>

          <div className="hero-note">
            <span className="hero-note-icon">✦</span>
            Supporting learners at every step of their journey
          </div>
        </div>

        <div className="hero-visual reveal">
          <div className="hero-image-main">
            <img
              src="/images/laptop-hero.jpeg"
              alt="Laptop available for student borrowing"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
              }}
            />

            <div className="image-placeholder laptop-placeholder">
              <span>01</span>
              <strong>Learning starts here.</strong>
              <small>LAPTOP ACCESS</small>
            </div>
          </div>

          <div className="hero-image-secondary">
            <img
              src="/images/graduation-gown-hero.jpeg"
              alt="Graduation gown available for students"
              onError={(event) => {
                event.currentTarget.style.display = 'none'
              }}
            />

            <div className="image-placeholder gown-placeholder">
              <span>02</span>
              <strong>Celebrate your achievement.</strong>
              <small>GRADUATION GOWNS</small>
            </div>
          </div>

          <div className="hero-floating-card">
            <span className="floating-card-icon">✦</span>
            <div>
              <strong>Your journey matters</strong>
              <small>We're here to support it.</small>
            </div>
          </div>

          <div className="hero-decoration hero-decoration-one" />
          <div className="hero-decoration hero-decoration-two" />
        </div>
      </div>

      <div className="hero-bottom-line">
        <span>LEARN</span>
        <span>GROW</span>
        <span>ACHIEVE</span>
        <span className="hero-bottom-year">IGIRE RWANDA · 2026</span>
      </div>
    </section>
  )
}
