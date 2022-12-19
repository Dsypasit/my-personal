import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Project from "./pages/Project";

function App() {
  return (
    <div className="cursor-default">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
