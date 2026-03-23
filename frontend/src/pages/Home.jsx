import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import "../styles/global.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="card fade-in">
        <h1>🚀 AI Resume Analyzer</h1>
        <p>Analyze your resume with AI</p>

        <button className="btn" onClick={() => navigate("/choose")}>
          Get Started
        </button>
      </div>
    </div>
  );
}

export default Home;