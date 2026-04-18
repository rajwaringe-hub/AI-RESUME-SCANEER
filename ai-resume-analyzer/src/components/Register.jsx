export default function Register({ setShowRegister }) {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="card">
        <h2 style={{ textAlign: "center" }}>Register</h2>

        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />

        <button onClick={() => alert("Account Created!")}>
          Register
        </button>

        <p
          style={{ marginTop: "10px", textAlign: "center", cursor: "pointer" }}
          onClick={() => setShowRegister(false)}
        >
          🔙 Back to Login
        </p>
      </div>
    </div>
  );
}