// src/App.jsx
import ProjectListPage from "./pages/ProjectListPage";
import "./App.css";
import { Routes, Route } from "react-router-dom"; // <== IMPORT
import CreateProjectPage from "./pages/CreateProjectPage";
import Navbar from "./components/Navbar";     // <== IMPORT
import HomePage from "./pages/HomePage";     // <== IMPORT
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import EditProjectPage from "./pages/EditProjectPage";

function App() {
  return (
    <div className="App">

     {/* Below: ADD <Navbar>, <Routes> & <Route> */}
      <Navbar />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route exact path="/projects/create" element={<CreateProjectPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:projectId" element={ <EditProjectPage /> } />

      </Routes>

    </div>
  );
}

export default App;
