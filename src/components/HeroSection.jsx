
export default function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-content">
        <span className="hero-label">IGIRE RWANDA · SHECANCODE</span>

        <p className="hero-cohort">
          COHORT 2026 | SOFTWARE DEVELOPMENT
        </p>

        <h1>
          Welcome back,
          <span> Participant!</span>
        </h1>

        <p className="hero-description">
          Your learning journey deserves the right tools.
          Manage your equipment requests, track your allocations,
          and stay ready for every opportunity.
        </p>

        <div className="hero-buttons">
          <a href="#equipment" className="hero-primary-button">
            Request a Laptop
          </a>

          <a href="#gowns" className="hero-secondary-button">
            Reserve a Gown
          </a>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-visual-circle">
          <span className="hero-decoration">IMENA</span>
          <span className="hero-decoration-small">
            LEARN · CREATE · GROW
          </span>
        </div>
      </div>
    </section>
  )
}
