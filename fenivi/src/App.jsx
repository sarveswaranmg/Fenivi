import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import Home from "./Pages/Home";
import About from "./Pages/About/About.jsx";
import Services from "./Pages/Services";
import Projects from "./Pages/Projects";
import KnowledgeHub from "./Pages/KnowledgeHub/KnowledgeHub.jsx";
import Contact from "./Pages/Contact";
import Article from "./Pages/KnowledgeHub/Article.jsx";
import AdminLogin from "./Pages/Admin/AdminLogin.jsx";
import AdminDashboard from "./Pages/Admin/AdminDashboard.jsx";
import EditArticle from "./Pages/Admin/EditArticle.jsx";
import EditProject from "./Pages/Admin/EditProject.jsx";
import EditEvent from "./Pages/Admin/EditEvent.jsx";
import EditBlog from "./Pages/Admin/EditBlog.jsx"; // Import EditBlog
import ProtectedRoute from "./Components/ProtectedRoute.jsx"; // Import ProtectedRoute
import Events from "./Pages/Event";
import EventDetails from "./Pages/EventDetails";
import ProjectDetails from "./Pages/ProjectDetails";
import Home1 from "./Pages/Home1.jsx";
import Courses from "./Pages/Courses.jsx";
import ContactButton from "./Components/ContactButton.jsx";
import MouseGlow from "./Components/MouseGlow.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

function AppContent() {
  const location = useLocation();
  const isAdminPage =
    location.pathname === "/admin" ||
    location.pathname === "/dashboard" ||
    location.pathname.startsWith("/admin/edit");
  const isContactPage = location.pathname === "/contact";

  return (
    <>
      <ScrollToTop />
      <MouseGlow />
      {!isAdminPage && <Navbar />}
      {!isAdminPage && <ContactButton />}
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
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit-article/:id"
          element={
            <ProtectedRoute>
              <EditArticle />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit-project/:id"
          element={
            <ProtectedRoute>
              <EditProject />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit-event/:id"
          element={
            <ProtectedRoute>
              <EditEvent />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/edit-blog/:id"
          element={
            <ProtectedRoute>
              <EditBlog />
            </ProtectedRoute>
          }
        />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        {/* <Route path="*" element={<Navigate to="/home" replace />} /> */}
      </Routes>
      {!isAdminPage && !isContactPage && <Footer />}
    </>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
