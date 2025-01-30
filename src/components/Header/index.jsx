import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu } from "lucide-react"
import "./index.css"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link to="/">Smart Health Monitor</Link>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          <Menu />
        </button>
        <nav className={`main-nav ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/features" onClick={toggleMenu}>
                Features
              </Link>
            </li>
            <li>
              <Link to="/solutions" onClick={toggleMenu}>
                Solutions
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

