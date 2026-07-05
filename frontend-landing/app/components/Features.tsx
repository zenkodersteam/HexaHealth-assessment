const features = [
  {
    title: "14-Day Battery Life",
    description:
      "A single charge keeps Pulse running for two full weeks, even with the always-on display active.",
  },
  {
    title: "Real-Time Health Metrics",
    description:
      "Track heart rate, blood oxygen, sleep stages, and stress levels with clinical-grade sensors.",
  },
  {
    title: "5ATM Water Resistance",
    description:
      "Swim, shower, or get caught in the rain — Pulse is rated for depths up to 50 meters.",
  },
  {
    title: "Smart Notifications",
    description:
      "Calls, texts, and app alerts appear instantly on your wrist, with quick-reply support.",
  },
];

export default function Features() {
  return (
    <section id="features" className="features container" aria-labelledby="features-heading">
      <h2 id="features-heading" className="section-heading">
        Key Features
      </h2>
      <ul className="features-grid">
        {features.map((feature) => (
          <li className="feature-card" key={feature.title}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
