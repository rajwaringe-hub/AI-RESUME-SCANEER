export default function Navbar({ setUser }) {
  return (
    <div className="navbar">
      <h2>🚀 AI Resume Analyzer</h2>

      <button
        style={{ width: "120px" }}
        onClick={() => {
          localStorage.removeItem("name");
          setUser(null);
        }}
      >
        Logout
      </button>
    </div>
  );
}