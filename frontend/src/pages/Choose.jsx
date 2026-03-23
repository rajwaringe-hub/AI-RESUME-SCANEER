import { useNavigate } from "react-router-dom";
import "../styles/choose.css";
import '../styles/global.css';

function Choose() {
  const navigate = useNavigate();

  return (
    <div className="choose-container">
      <div className="card choose-card fade-in">
        <h1>Welcome 👋</h1>
        <p>Select an option</p>
        <button className="btn" onClick={() => navigate("/login")}>
          Login
        </button> <br /> <br />
        <button className="btn" onClick={() => navigate("/signup")}>
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Choose;