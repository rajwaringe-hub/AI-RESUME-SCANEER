export default function Login({ setUser, goRegister }) {
  const handleLogin = (e) => {
    e.preventDefault();
    const saved = JSON.parse(localStorage.getItem("user"));

    if (saved) {
      localStorage.setItem("name", saved.name);
      setUser(saved.name);
    }
  };

  return (
    <div className="container" style={{ height: "100vh" }}>
      <form className="card" style={{ width: "300px" }}>
        <h2>Login</h2>

        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />

        <button onClick={handleLogin}>Login</button>

        <p onClick={goRegister} style={{ cursor: "pointer" }}>
          Register here
        </p>
      </form>
    </div>
  );
}