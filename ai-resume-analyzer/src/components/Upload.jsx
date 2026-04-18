import { useState } from "react";

export default function Upload({ setResult }) {
  const [jd, setJd] = useState("");
  const [file, setFile] = useState(null);

  const analyze = () => {
    if (!file) {
      alert("Upload resume first");
      return;
    }

    if (!jd.trim()) {
      alert("Enter job description");
      return;
    }

    const keywords = ["html", "css", "javascript", "react"];
    const text = jd.toLowerCase();

    const found = keywords.filter(k => text.includes(k));
    const missing = keywords.filter(k => !text.includes(k));

    const score = Math.floor((found.length / keywords.length) * 100);

    setResult({ score, found, missing });
  };

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="card">
        <h2>Upload Resume</h2>

        <input type="file" onChange={(e) => setFile(e.target.files[0])} />

        <textarea
          placeholder="Paste Job Description"
          value={jd}
          onChange={(e) => setJd(e.target.value)}
        />

        <button onClick={analyze}>Analyze</button>
      </div>
    </div>
  );
}