import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AllProject from "./components/AllProjects";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos" element={<AllProject />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
