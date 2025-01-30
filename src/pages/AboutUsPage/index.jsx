import "./index.css"

function AboutUsPage() {
  return (
    <div className="about-us-page">
      <div className="container">
        <h1>About Us</h1>
        <section className="mission-vision">
          <h2>Our Mission</h2>
          <p>To empower India with smart healthcare solutions, making quality health monitoring accessible to all.</p>
          <h2>Our Vision</h2>
          <p>A healthier, smarter India where every citizen has the tools to proactively manage their well-being.</p>
        </section>
        <section className="team">
          <h2>Our Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="/placeholder.svg?height=150&width=150" alt="Team Member 1" />
              <h3>Dr. Priya Sharma</h3>
              <p>Chief Medical Officer</p>
            </div>
            <div className="team-member">
              <img src="/placeholder.svg?height=150&width=150" alt="Team Member 2" />
              <h3>Rahul Patel</h3>
              <p>Chief Technology Officer</p>
            </div>
            <div className="team-member">
              <img src="/placeholder.svg?height=150&width=150" alt="Team Member 3" />
              <h3>Anita Desai</h3>
              <p>Head of Data Science</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutUsPage

