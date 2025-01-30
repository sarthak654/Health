import "./index.css"

function SolutionsPage() {
  return (
    <div className="solutions-page">
      <div className="container">
        <h1>Our Solutions</h1>
        <div className="solutions-grid">
          <div className="solution-card">
            <img src="/placeholder.svg?height=200&width=200" alt="Elderly Care" />
            <h2>Elderly Care</h2>
            <p>Tailored monitoring and support for seniors, ensuring their safety and well-being.</p>
          </div>
          <div className="solution-card">
            <img src="/placeholder.svg?height=200&width=200" alt="Fitness Enthusiasts" />
            <h2>Fitness Enthusiasts</h2>
            <p>Advanced tracking and analytics for those looking to optimize their fitness journey.</p>
          </div>
          <div className="solution-card">
            <img src="/placeholder.svg?height=200&width=200" alt="Chronic Disease Management" />
            <h2>Chronic Disease Management</h2>
            <p>Comprehensive monitoring and support for individuals managing chronic conditions.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SolutionsPage

