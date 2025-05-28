import { Routes, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" Component={AboutPage}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
