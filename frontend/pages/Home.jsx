import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-black text-white">
      <h1 className="text-4xl font-bold mb-4">
        AI Resume Analyzer 🚀
      </h1>

      <button
        onClick={() => navigate("/login")}
        className="bg-blue-500 px-6 py-2 rounded"
      >
        Get Started
      </button>
    </div>
  );
}

export default Home;