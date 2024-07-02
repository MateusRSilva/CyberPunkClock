import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../App.css'

const Stopwatch = () => {
  const [stopwatchTime, setStopwatchTime] = useState(0);
  const [isStopwatchRunning, setIsStopwatchRunning] = useState(false);

  useEffect(() => {
    let stopwatchInterval;
    if (isStopwatchRunning) {
      stopwatchInterval = setInterval(() => {
        setStopwatchTime(prevTime => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(stopwatchInterval);
  }, [isStopwatchRunning]);

  const handleStopwatchStartStop = () => {
    setIsStopwatchRunning(!isStopwatchRunning);
  };

  const handleStopwatchReset = () => {
    setStopwatchTime(0);
    setIsStopwatchRunning(false);
  };

  return (
    <div className="stopwatch">
      <h2>Stopwatch</h2>
      <div>{moment.utc(stopwatchTime * 1000).format('HH:mm:ss')}</div>
      <button onClick={handleStopwatchStartStop}>{isStopwatchRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleStopwatchReset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
