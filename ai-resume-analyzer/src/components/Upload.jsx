import { useState } from "react";

export default function Upload({ setResult }) {
  const [file, setFile] = useState(null);
  const [jd, setJd] = useState("");

  const handleAnalyze = () => {
    console.log("clicked");

    if (!file || !jd) {
      alert("Please upload resume and enter job description");
      return;
    }

    const keywords = ["html", "css", "javascript", "react", "python"];

    const found = keywords.filter(k =>
      jd.toLowerCase().includes(k)
    );

    const missing = keywords.filter(k =>
      !jd.toLowerCase().includes(k)
    );

    const score = Math.min(found.length * 20, 100);

    setResult({ score, found, missing });
  };

  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="card" style={{ width: "350px" }}>
        <h2>Upload Resume</h2>

        <input type="file" onChange={(e)=>setFile(e.target.files[0])} />

        <textarea
          placeholder="Job Description"
          onChange={(e)=>setJd(e.target.value)}
        ></textarea>

        <button onClick={handleAnalyze}>Analyze</button>
      </div>
    </div>
  );
}