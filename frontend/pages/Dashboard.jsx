import { useState } from "react";
import axios from "axios";

function Dashboard() {
  const [file, setFile] = useState(null);
  const [job, setJob] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = async () => {
    if (!file || !job) {
      alert("Upload resume + job description");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);
    formData.append("jobDescription", job);

    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:5000/api/analyze",
        formData
      );

      setResult(res.data);
    } catch (err) {
      console.log(err);
      alert("Error analyzing resume");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-gray-900 text-white p-6">

      {/* Title */}
      <h1 className="text-4xl font-bold text-center mb-10 tracking-wide">
        🚀 AI Resume Analyzer
      </h1>

      {/* MAIN CARD */}
      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl">

        {/* Upload */}
        <div className="border-2 border-dashed border-gray-400 p-6 rounded-xl text-center hover:bg-white/5 transition">
          <p className="text-lg mb-2">📄 Upload Resume</p>

          <input
            type="file"
            className="mx-auto"
            onChange={(e) => setFile(e.target.files[0])}
          />

          {file && (
            <p className="mt-2 text-green-400 font-semibold">
              ✅ {file.name}
            </p>
          )}
        </div>

        {/* Job Description */}
        <textarea
          placeholder="📝 Paste Job Description here..."
          className="w-full mt-6 p-4 rounded-xl text-black h-40 outline-none"
          onChange={(e) => setJob(e.target.value)}
        />

        {/* Button */}
        <button
          onClick={handleAnalyze}
          disabled={loading}
          className="w-full mt-6 bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition transform py-3 rounded-xl text-lg font-semibold shadow-lg"
        >
          {loading ? "🔄 Analyzing..." : "Analyze Resume"}
        </button>
      </div>

      {/* RESULT SECTION */}
      {result && (
        <div className="max-w-4xl mx-auto mt-10 backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-3xl shadow-2xl">

          <h2 className="text-2xl font-bold mb-6">📊 Analysis Result</h2>

          {/* Score */}
          <div className="mb-6">
            <p className="text-lg">Match Score</p>

            <div className="w-full bg-gray-700 rounded-full h-4 mt-2">
              <div
                className="bg-green-500 h-4 rounded-full"
                style={{ width: `${result.matchPercentage}%` }}
              ></div>
            </div>

            <p className="mt-2 text-green-400 font-bold">
              {result.matchPercentage}%
            </p>
          </div>

          {/* Missing Keywords */}
          <div className="mb-6">
            <h3 className="font-semibold text-red-400 mb-2">
              ❌ Missing Keywords
            </h3>
            <div className="flex flex-wrap gap-2">
              {result.missingKeywords?.map((word, i) => (
                <span
                  key={i}
                  className="bg-red-500/20 px-3 py-1 rounded-full text-sm"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div>
            <h3 className="font-semibold text-yellow-300 mb-2">
              💡 Suggestions
            </h3>
            <ul className="list-disc ml-5 space-y-1">
              {result.suggestions?.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
}

export default Dashboard;