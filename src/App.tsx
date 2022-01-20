import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "Components/Header";
import About from "Routes/About";
import Contact from "Routes/Contact";
import Home from "Routes/Home";
import Projects from "Routes/Projects";
import Studies from "Routes/Studies";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/studies" element={<Studies></Studies>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
