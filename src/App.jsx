import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllProject from "./components/AllProjects";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<AllProject />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
