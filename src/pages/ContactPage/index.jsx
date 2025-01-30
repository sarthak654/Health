import "./index.css"

function ContactPage() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
  }

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <form onSubmit={handleSubmit} className="contact-form">
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We'd love to hear from you. Reach out to us through any of the following channels:</p>
            <ul>
              <li>Email: info@smarthealthmonitor.in</li>
              <li>Phone: +91 123 456 7890</li>
              <li>Address: 123 Tech Park, Bangalore, India</li>
            </ul>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage

