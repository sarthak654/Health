import "./index.css"

function FeaturesPage() {
  return (
    <div className="features-page">
      <div className="container">
        <h1>Our Features</h1>
        <div className="features-grid">
          <div className="feature-card">
            <img src="/placeholder.svg?height=150&width=150" alt="Real-time Monitoring" />
            <h2>Real-time Health Monitoring</h2>
            <p>
              Track your vital signs and health metrics in real-time, ensuring you're always aware of your body's
              status.
            </p>
          </div>
          <div className="feature-card">
            <img src="/placeholder.svg?height=150&width=150" alt="Data Analytics" />
            <h2>Advanced Data Analytics</h2>
            <p>Leverage the power of AI and machine learning to gain valuable insights from your health data.</p>
          </div>
          <div className="feature-card">
            <img src="/placeholder.svg?height=150&width=150" alt="Wearable Integration" />
            <h2>Seamless Wearable Integration</h2>
            <p>Connect your favorite wearable devices for a comprehensive view of your health and fitness.</p>
          </div>
          <div className="feature-card">
            <img src="/placeholder.svg?height=150&width=150" alt="Remote Consultations" />
            <h2>Remote Healthcare Consultations</h2>
            <p>Connect with healthcare professionals remotely for quick and convenient medical advice.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturesPage

