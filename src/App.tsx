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
        <Route path="/projects" element={<Projects />}>
          <Route path="/projects/:projectId" element={<Projects />} />
        </Route>
        <Route path="/studies" element={<Studies />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
