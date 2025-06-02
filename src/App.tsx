import { Routes, Route, Navigate } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useContext } from "react";
import { DarkMode } from "./context/DarkMode";

function App() {
  const { darkMode, setDarkMode } = useContext(DarkMode);
  console.log(darkMode);
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/about" />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" Component={NotFoundPage} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
