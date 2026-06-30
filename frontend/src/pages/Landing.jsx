import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <main className="landing-page">
      <section className="hero-card">
        <div className="hero-content">
          <p className="eyebrow">Build better links</p>
          <h1>Create your short URL in seconds</h1>
          <p className="hero-copy">
            Turn long web addresses into clean, shareable links. Sign up or log in to manage your URLs and get started with shortening.
          </p>
          <div className="hero-actions">
            <Link to="/login" className="primary-btn">
              Login
            </Link>
            <Link to="/signup" className="secondary-btn">
              Signup
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
