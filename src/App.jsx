import "./App.css";
import { Button } from "./components/ui/button";
import { Route, Routes } from "react-router";
import { Navbar, Footer } from "./customcomponetns";
import { Home, About, Contact, Registration } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/registration" element={<Registration />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
