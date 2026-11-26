const steps = [
  {
    number: '01',
    title: 'Explore resources',
    description:
      'Browse the available laptops and graduation gowns to find what you need.',
  },
  {
    number: '02',
    title: 'Submit a request',
    description:
      'Choose your equipment and submit a booking request through the student portal.',
  },
  {
    number: '03',
    title: 'Get approval',
    description:
      'The staff team reviews your request and confirms the equipment assignment.',
  },
  {
    number: '04',
    title: 'Collect and return',
    description:
      'Collect your approved equipment and return it when your booking period ends.',
  },
]

export default function HowItWorks() {
  return (
    <section className="how-section section-padding" id="how-it-works">
      <div className="section-heading reveal">
        <span className="section-eyebrow">A SIMPLE PROCESS</span>
        <h2>
          From request to
          <span> collection.</span>
        </h2>
        <p>
          Getting the resources you need is designed to be straightforward.
        </p>
      </div>

      <div className="steps-grid">
        {steps.map((step) => (
          <article className="step-card reveal" key={step.number}>
            <span className="step-number">{step.number}</span>
            <div className="step-line" />
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}