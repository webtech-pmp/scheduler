import React, { useState } from "react";

// initial
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  // manage history state
  const [history, setHistory] = useState([initial]);

  // transition
  function transition(newMode, replace = false) {
    setMode(newMode);
    if (replace) {
      setHistory(currentHistory => {
        currentHistory.pop();
        return [...currentHistory, newMode];
      });
    } else {
      setHistory(currentHistory => {
        return [...currentHistory, newMode];
      });
    }
  }

  function back() {
    // logic for pop
    setHistory(currentHistory => {
      if (currentHistory.length !== 1) {
        currentHistory.pop();
        setMode(currentHistory[currentHistory.length - 1]);
        return currentHistory;
      } else {
        setMode(currentHistory[currentHistory.length - 1]);
      }
      return currentHistory;
    });
  }
  return { mode, transition, back };
}
