import { useState } from "react";

export default function Upload({ setResult }) {
  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");

  const handleAnalyze = () => {
    if (!file || !jd) {
      alert("Please upload resume and enter job description");
      return;
    }

    // Simple fake AI logic (demo)
    const keywords = ["html", "css", "javascript", "react", "python"];
    const jdText = jd.toLowerCase();

    const found = keywords.filter((k) => jdText.includes(k));
    const missing = keywords.filter((k) => !jdText.includes(k));

    const score = Math.min(found.length * 15 + 40, 95);

    setResult({
      score,
      found,
      missing,
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Upload Resume</h2>

      <div>
        <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
      </div>

      <div style={{ marginTop: "15px" }}>
        <textarea
          placeholder="Paste Job Description..."
          rows="5"
          cols="40"
          value={jd}
          onChange={(e) => setJd(e.target.value)}
        />
      </div>

      <button style={{ marginTop: "15px" }} onClick={handleAnalyze}>
        Analyze Resume
      </button>
    </div>
  );
}