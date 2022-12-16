import About from "./components/About";
import Experience from "./components/Experience";
import ProjectDisplay from "./components/ProjectDisplay";
import Start from "./components/Start";

function App() {
  return (
    <div className="cursor-default">
      <Start />
      <About />
      <Experience />
      <ProjectDisplay />
    </div>
  );
}

export default App;
