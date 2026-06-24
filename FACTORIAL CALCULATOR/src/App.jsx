import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const calculateFactorial = () => {
    let n = Number(number);
    let fact = 1;

    for (let i = 1; i <= n; i++) {
      fact *= i;
    }

    setResult(fact);
  };

  return (
    <div className="container">
      <h2>Factorial Calculator</h2>

      <input
        type="number"
        placeholder="Enter a number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <button onClick={calculateFactorial}>
        Calculate
      </button>

      <h3>Factorial: {result}</h3>
    </div>
  );
}

export default App;