import React, { useState, useRef } from "react";

export default function TextStreamer() {
  const [words, setWords] = useState([]);
  const [displayed, setDisplayed] = useState("");
  const [loading, setLoading] = useState(false);

  const intervalRef = useRef(null);

  // Fetch text from API
  const fetchText = async () => {
    stopStreaming();
    setLoading(true);
    setDisplayed("");

    try {
      const res = await fetch(
        "https://baconipsum.com/api/?type=meat-and-filler&paras=1"
      );
      const data = await res.json();

      const text = data[0];
      const wordArray = text.split(" ");

      setWords(wordArray);
    } catch (err) {
      console.log(err);
    }

    setLoading(false);
  };

  // Start streaming
  const startStreaming = () => {
    if (!words.length) return;

    stopStreaming(); // prevent multiple intervals

    let i = 0;

    intervalRef.current = setInterval(() => {
      setDisplayed(words.slice(0, i + 1).join(" "));
      i++;

      if (i === words.length) {
        clearInterval(intervalRef.current);
      }
    }, 300);
  };

  // Stop streaming
  const stopStreaming = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Regenerate text
  const regenerate = () => {
    fetchText();
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>Text Streamer</h2>
      {loading && <p>Fetching text...</p>}
      <div>{displayed}</div>
      <div style={{ marginTop: "10px" }}>
        <button onClick={fetchText}>Fetch Text</button>
        <button onClick={startStreaming}>Start</button>
        <button onClick={stopStreaming}>Stop</button>
        <button onClick={regenerate}>Regenerate</button>
      </div>
    </div>
  );
}
