export default function EquipmentShowcase() {
  return (
    <section className="showcase-section section-padding">
      <div className="showcase-heading reveal">
        <div>
          <span className="section-eyebrow">MADE FOR YOUR JOURNEY</span>
          <h2>
            Resources that move
            <span> you forward.</span>
          </h2>
        </div>

        <p>
          From everyday learning to once-in-a-lifetime celebrations,
          we're helping you access what matters.
        </p>
      </div>

      <div className="showcase-grid">
        <article className="showcase-card showcase-laptop reveal">
          <img
            src="/images/landing/laptop.jpg"
            alt="Laptop for student learning"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />

          <div className="showcase-placeholder">
            <span>01</span>
            <strong>Tools for learning.</strong>
          </div>

          <div className="showcase-overlay">
            <span>LEARNING RESOURCES</span>
            <h3>Build your next big idea.</h3>
          </div>
        </article>

        <article className="showcase-card showcase-gown reveal">
          <img
            src="/images/landing/graduation-gown.jpg"
            alt="Graduation gown for students"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
            }}
          />

          <div className="showcase-placeholder">
            <span>02</span>
            <strong>A moment worth celebrating.</strong>
          </div>

          <div className="showcase-overlay">
            <span>GRADUATION SUPPORT</span>
            <h3>Celebrate how far you've come.</h3>
          </div>
        </article>
      </div>
    </section>
  )
}