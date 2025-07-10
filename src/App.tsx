import { useState } from "react";
import CountdownTimer from "./components/CountdownTimer";
import "./styles.css";

export default function App() {
  const [targetDate, setTargetDate] = useState<string>("");

  return (
    <div className="App">
      <h2>Set Countdown Target</h2>

      <input
        type="datetime-local"
        onChange={(e) => setTargetDate(e.target.value)}
        style={{ padding: "0.5rem", fontSize: "1rem", marginBottom: "1.5rem" }}
      />
      <CountdownTimer targetDate={targetDate} />
    </div>
  );
}
