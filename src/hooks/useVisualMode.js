import React, { useState } from "react";
// initial
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);
  // manage history state

  // transition
  function transition(newMode, replace = false) {
    setMode(newMode);
    if(replace) {
      setHistory((currentHistory) => {
        currentHistory.pop();
        return [
          ...currentHistory,
          newMode
        ]
      })
    } else {
      setHistory((currentHistory) => {
        return [
          ...currentHistory,
          newMode
        ]
      })
    }
  }

  function back() {
    // logic for pop    
    
  }
  return { mode, transition, back };
}
