export default function Dashboard({ data }) {
  if (!data) return null;

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h2>📊 Analysis Result</h2>

      <h1 style={{ color: "green" }}>
        Score: {data.score}/100
      </h1>

      <div style={{ marginTop: "20px" }}>
        <h3>✅ Matched Keywords</h3>
        {data.found.length > 0 ? (
          data.found.map((k, i) => (
            <span key={i} style={{ marginRight: "10px" }}>
              {k}
            </span>
          ))
        ) : (
          <p>No keywords matched</p>
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3>❌ Missing Keywords</h3>
        {data.missing.length > 0 ? (
          data.missing.map((k, i) => (
            <span key={i} style={{ marginRight: "10px", color: "red" }}>
              {k}
            </span>
          ))
        ) : (
          <p>All keywords matched 🎉</p>
        )}
      </div>
    </div>
  );
}