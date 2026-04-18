export default function Navbar({ setUser }) {
  const handleLogout = () => {
    localStorage.removeItem("name");
    setUser(null);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#222",
        color: "#fff",
      }}
    >
      <h2>AI Resume Analyzer</h2>

      <button
        onClick={handleLogout}
        style={{
          padding: "8px 15px",
          cursor: "pointer",
          border: "none",
          background: "red",
          color: "#fff",
          borderRadius: "5px",
        }}
      >
        Logout
      </button>
    </div>
  );
}
