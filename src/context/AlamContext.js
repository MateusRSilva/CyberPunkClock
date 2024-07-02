import React, { createContext, useState, useEffect } from 'react';

export const AlarmContext = createContext();

export const AlarmProvider = ({ children }) => {
  const [alarmTime, setAlarmTime] = useState('');
  const [isAlarmSet, setIsAlarmSet] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timerID);
  }, []);

  useEffect(() => {
    if (isAlarmSet && alarmTime) {
      const alarmDate = new Date();
      const [alarmHour, alarmMinute] = alarmTime.split(':').map(Number);
      alarmDate.setHours(alarmHour, alarmMinute, 0, 0);

      if (currentTime >= alarmDate) {
        alert('Alarm ringing!');
        setIsAlarmSet(false);
      }
    }
  }, [currentTime, alarmTime, isAlarmSet]);

  const handleAlarmSet = (time) => {
    setAlarmTime(time);
    setIsAlarmSet(true);
  };

  const handleAlarmClear = () => {
    setIsAlarmSet(false);
    setAlarmTime('');
  };

  return (
    <AlarmContext.Provider
      value={{
        alarmTime,
        isAlarmSet,
        handleAlarmSet,
        handleAlarmClear,
      }}
    >
      {children}
    </AlarmContext.Provider>
  );
};
