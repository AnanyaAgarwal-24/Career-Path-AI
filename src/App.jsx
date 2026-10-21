import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Planner from "./pages/Planner";
import Roadmap from "./pages/Roadmap";
import Resources from "./pages/Resources";
import "./index.css";

function App() {
  const [page, setPage] = useState("dashboard");
  const [careerData, setCareerData] = useState(null);

  const handlePlannerComplete = (data) => {
    setCareerData(data);
    setPage("roadmap");
  };

  return (
    <div className="app">

      <nav className="navbar">

        <div className="brand">
          <div className="brand-icon">C</div>
          <span>CareerPath AI</span>
        </div>

        <div className="nav-links">

          <button
            className={page === "dashboard" ? "active" : ""}
            onClick={() => setPage("dashboard")}
          >
            Dashboard
          </button>

          <button
            className={page === "planner" ? "active" : ""}
            onClick={() => setPage("planner")}
          >
            AI Planner
          </button>

          <button
            className={page === "roadmap" ? "active" : ""}
            onClick={() => setPage("roadmap")}
          >
            Roadmap
          </button>

          <button
            className={page === "resources" ? "active" : ""}
            onClick={() => setPage("resources")}
          >
            Resources
          </button>

        </div>

      </nav>

      <main className="main-content">

        {page === "dashboard" && (
          <Dashboard
            careerData={careerData}
            onStart={() => setPage("planner")}
          />
        )}

        {page === "planner" && (
          <Planner
            onComplete={handlePlannerComplete}
          />
        )}

        {page === "roadmap" && (
          <Roadmap
            careerData={careerData}
            onResources={() => setPage("resources")}
          />
        )}

        {page === "resources" && (
          <Resources
            careerData={careerData}
          />
        )}

      </main>

    </div>
  );
}

export default App;