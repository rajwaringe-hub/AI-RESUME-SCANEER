import { useState, useEffect } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("login");
  const [result, setResult] = useState(null);

  useEffect(() => {
    const name = localStorage.getItem("name");
    if (name) setUser(name);
  }, []);

  if (!user) {
    return page === "login" ? (
      <Login setUser={setUser} goRegister={() => setPage("register")} />
    ) : (
      <Register goLogin={() => setPage("login")} />
    );
  }

  return (
    <>
      <Navbar setUser={setUser} />
      <Upload setResult={setResult} />
      {result && <Dashboard data={result} />}
    </>
  );
}

export default App;