import { Link } from "react-router-dom"
import "./index.css"

function HomePage() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Revolutionizing Health for a Smart India</h1>
          <p>Experience the future of healthcare with our Smart Health Monitoring System</p>
          <Link to="/features" className="cta-button">
            Explore Features
          </Link>
        </div>
      </section>
      <section className="features-preview">
        <div className="container">
          <h2>Why Choose Smart Health Monitor?</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <img src="/placeholder.svg?height=100&width=100" alt="Real-time Monitoring" />
              <h3>Real-time Monitoring</h3>
              <p>Stay updated on your health metrics 24/7</p>
            </div>
            <div className="feature-item">
              <img src="/placeholder.svg?height=100&width=100" alt="Data Analytics" />
              <h3>Advanced Analytics</h3>
              <p>Gain insights from your health data</p>
            </div>
            <div className="feature-item">
              <img src="/placeholder.svg?height=100&width=100" alt="Remote Consultations" />
              <h3>Remote Consultations</h3>
              <p>Connect with healthcare professionals anytime, anywhere</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

