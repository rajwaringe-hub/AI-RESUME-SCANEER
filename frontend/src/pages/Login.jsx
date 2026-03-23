import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import "../styles/global.css";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="auth-container">
      <div className="auth-box fade-in">
        <h2>Login</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button className="btn" onClick={() => navigate("/dashboard")}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;