import { useState } from "react";

export default function Register({ goLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const userData = {
      name,
      email,
      password,
    };

    localStorage.setItem("user", JSON.stringify(userData));
    alert("Registered successfully ✅");

    goLogin(); // go back to login page
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Register</h2>

      <form onSubmit={handleRegister}>
        <div>
          <input
            type="text"
            placeholder="Enter Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div style={{ marginTop: "10px" }}>
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

        <button style={{ marginTop: "15px" }}>Register</button>
      </form>

      <p style={{ marginTop: "10px", cursor: "pointer" }} onClick={goLogin}>
        Already have an account? Login
      </p>
    </div>
  );
}