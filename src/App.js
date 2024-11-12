import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./component/Login";
import About from "./component/About";
import Projects from "./component/Projects";
import AboutEditPage from "./pages/AboutEditPage";
import AboutWritePage from "./pages/AboutWritePage";
import ProjectsEditPage from "./pages/ProjectsEditPage";
import ProjectsWritePage from "./pages/ProjectsWritePage";

function App() {
  return (
      <BrowserRouter>
        <Routes >
          <Route path="/" element={<Login />} ></Route>
          <Route path="/about" element={<About />}></Route>
            <Route path="/about/about_edit_page" element={<AboutEditPage />}/>
            <Route path="/about/about_write_page" element={<AboutWritePage />}/>
          <Route path="/projects" element={<Projects />}></Route>
            <Route path="/projects/projects_edit_page" element={<ProjectsEditPage />}/>
            <Route path="/projects/projects_write_page" element={<ProjectsWritePage />}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
