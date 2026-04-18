export default function Dashboard({ data }) {
  return (
    <div className="container" style={{ marginTop: "50px" }}>
      <div className="card" style={{ width: "400px" }}>
        <h2>Result</h2>

        <h1>Score: {data.score}%</h1>

        <h3>Matched</h3>
        {data.found.map((k, i) => <span key={i}>{k} </span>)}

        <h3>Missing</h3>
        {data.missing.map((k, i) => <span key={i}>{k} </span>)}
      </div>
    </div>
  );
}