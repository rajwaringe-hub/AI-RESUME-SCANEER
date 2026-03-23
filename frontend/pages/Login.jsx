import { useNavigate } from "react-router-dom";
import '../styles/global.css'
import '../styles/login.css'

function Login() {
  const navigate = useNavigate();

  return (
    <div className="home fade-in h-screen flex flex-col items-center justify-center">
      <h1>Login Page</h1>

      <button onClick={() => navigate("/dashboard")}>
        Login
      </button>
    </div>
  );
}

export default Login;