
export default function HeroSection() {
  return (
    <section className="dashboard-hero" id="home">
      <div className="hero-topline">
        <span>STUDENT HUB · SHECANCODE</span>
        <span className="hero-decoration">IGIRE RWANDA</span>
      </div>

      <div className="hero-banner">
        <div className="hero-content">
          <p className="hero-cohort">
            <span></span>
            COHORT 12 · SOFTWARE ENGINEERING TRACK
          </p>

          <h1>Welcome back, Participant!</h1>

          <p className="hero-description">
            Manage your learning gear and graduation attire
            from your unified participant console.
          </p>
        </div>

        <div className="hero-buttons">
          <a href="#equipment" className="hero-primary-button">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="4" width="18" height="13" rx="1.5" />
              <path d="M2 20h20M8 17l-1 3m9-3 1 3" />
            </svg>
            Request Laptop
          </a>

          <a href="#gowns" className="hero-secondary-button">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2 9 12 4l10 5-10 5L2 9Z" />
              <path d="M6 11v5c3.5 3 8.5 3 12 0v-5M22 9v7" />
            </svg>
            Reserve Gown
          </a>
        </div>

        <div className="hero-pattern"></div>
      </div>
    </section>
  )
}
