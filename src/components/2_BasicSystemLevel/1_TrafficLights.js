import React, { useEffect, useRef, useState } from "react";

function TrafficLights() {
  // store types of traffic lights
  const LIGHTS = {
    RED: "red",
    YELLOW: "yellow",
    GREEN: "green",
  };

  // Duration of each traffic light
  const DURATIONS = {
    red: 5000,
    yellow: 2000,
    green: 4000,
  };

  // Keep track of the current light
  const [currentLight, setCurrentLight] = useState(LIGHTS.RED);
  // Keep track of the pause
  const [isPaused, setIsPaused] = useState(false);

  // Run a timer // using it as reference as i have to handle it during pause and reset
  const timerRef = useRef(null);

  // function to get the next light
  const getNextLight = (light) => {
    if (light === LIGHTS.RED) return LIGHTS.YELLOW;
    if (light === LIGHTS.YELLOW) return LIGHTS.GREEN;
    return LIGHTS.RED;
  };

  // Runs a timer for each light and moves to the next lighy

  // Debounce
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setTimeout(() => {
      setCurrentLight((prev) => getNextLight(prev));
    }, DURATIONS[currentLight]);

    // Clear the timeout
    return () => clearTimeout(timerRef.current);
  }, [currentLight, isPaused]);

  const handlePause = () => {
    setIsPaused(true);
    clearTimeout(timerRef.current);
  };

  const handleResume = () => {
    setIsPaused(false);
  };

  const handleReset = () => {
    clearTimeout(timerRef.current);
    setCurrentLight(LIGHTS.RED);
    setIsPaused(false);
  };

  const getLightStyle = (light) => ({
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    margin: "10px",
    backgroundColor: currentLight === light ? light : "#ccc",
  });
  return (
    <>
      <h2>Traffic Signal</h2>

      <div>
        <div style={getLightStyle("red")} />
        <div style={getLightStyle("yellow")} />
        <div style={getLightStyle("green")} />
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleResume}>Resume</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </>
  );
}

export default TrafficLights;
