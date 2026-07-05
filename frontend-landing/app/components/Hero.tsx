import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-heading">
      <div className="hero-text">
        <p className="eyebrow">New Release</p>
        <h2 id="hero-heading">Fitness tracking that keeps up with you.</h2>
        <p className="hero-copy">
          Pulse Smartwatch pairs a vivid always-on display with 14-day battery
          life, real-time health metrics, and seamless phone notifications —
          built for anyone who wants to move more and worry less.
        </p>
        <a className="cta-button" href="#features">
          Explore Features
        </a>
      </div>
      <div className="hero-image">
        <Image
          src="/product.svg"
          alt="Pulse Smartwatch product illustration showing a dark watch face with a stopwatch icon"
          width={480}
          height={480}
          priority
        />
      </div>
    </section>
  );
}
