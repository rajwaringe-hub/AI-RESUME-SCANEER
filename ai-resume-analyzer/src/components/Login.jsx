import { useState } from "react";

export default function Login({ setUser, goRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      localStorage.setItem("name", savedUser.name);
      setUser(savedUser.name);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: "10px" }}>
          <input
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button style={{ marginTop: "15px" }}>Login</button>
      </form>

      <p style={{ marginTop: "10px", cursor: "pointer" }} onClick={goRegister}>
        Don't have an account? Register
      </p>
    </div>
  );
}