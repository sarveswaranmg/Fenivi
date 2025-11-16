import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About/About.jsx";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import KnowledgeHub from "./Pages/KnowledgeHub/KnowledgeHub.jsx";
import Contact from "./Pages/Contact";
import Article from "./Pages/KnowledgeHub/Article.jsx";
import AdminLogin from "./Pages/Admin/AdminLogin.jsx";
import AdminDashboard from "./Pages/Admin/AdminDashboard.jsx";
import Events from "./Pages/Event";
import EventDetails from "./Pages/EventDetails";
import Home1 from "./Pages/Home1.jsx";
import Courses from "./Pages/Courses.jsx";
import ContactButton from "./Components/ContactButton.jsx";
function App() {
  return (
    <Router>
      <Navbar />
      <ContactButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/knowledge-hub" element={<KnowledgeHub />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/article/:id" element={<Article />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
