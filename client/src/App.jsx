import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PublicBlogPage from "./pages/PublicBlogPage";
import BlogAdminPage from "./pages/BlogAdminPage"; // renamed from BlogPage

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<PublicBlogPage />} /> {/* Visitors */}
        <Route path="/admin/blog" element={<BlogAdminPage />} /> {/* Admin */}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
