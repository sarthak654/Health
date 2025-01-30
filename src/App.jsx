import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/Header/index"
import Footer from "./components/Footer/index"
import HomePage from "./pages/HomePage/index"
import FeaturesPage from "./pages/FeaturesPage/index"
import SolutionsPage from "./pages/SolutionsPage/index"
import AboutUsPage from "./pages/AboutUsPage/index"
import ContactPage from "./pages/ContactPage/index"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

