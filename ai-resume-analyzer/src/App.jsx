import { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Upload from "./components/Upload";
import Dashboard from "./components/Dashboard";

function App() {
  const [user, setUser] = useState(null);
  const [showRegister, setShowRegister] = useState(false);
  const [result, setResult] = useState(null);

  // 👉 Login/Register screen
  if (!user) {
    return showRegister ? (
      <Register setShowRegister={setShowRegister} />
    ) : (
      <Login setUser={setUser} setShowRegister={setShowRegister} />
    );
  }

  // 👉 After login
  return (
    <>
      <Navbar setUser={setUser} />
      <Upload setResult={setResult} />
      {result && <Dashboard data={result} />}
    </>
  );
}

export default App;