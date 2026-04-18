export default function Login({ setUser, setShowRegister }) {
  return (
    <div className="container" style={{ height: "100vh" }}>
      <div className="card">
        <h2 style={{ textAlign: "center" }}>Login</h2>

        <input placeholder="Email" />
        <input placeholder="Password" type="password" />

        <button onClick={() => setUser("user")}>Login</button>

        <p
          style={{ marginTop: "10px", textAlign: "center", cursor: "pointer" }}
          onClick={() => setShowRegister(true)}
        >
          👉 Create New Account
        </p>
      </div>
    </div>
  );
}