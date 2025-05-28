import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={AboutPage}></Route>
        <Route path="/projects" Component={ProjectsPage}></Route>
        <Route path="/contact" Component={ContactPage}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
