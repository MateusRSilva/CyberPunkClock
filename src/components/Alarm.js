import React, { useContext, useState } from 'react';
import { AlarmContext } from '../context/AlamContext';
import '../App.css'

const Alarm = () => {
    const [inputTime, setInputTime] = useState('');
    const { alarmTime, isAlarmSet, handleAlarmSet, handleAlarmClear } = useContext(AlarmContext);

    const handleInputChange = (event) => {
        setInputTime(event.target.value);
    };

    const handleSetAlarm = () => {
        handleAlarmSet(inputTime);
        setInputTime('');
    };

    return (
        <div className="alarm">
            <h2>Set Alarm</h2>
            <input type="time" value={inputTime} onChange={handleInputChange} />
            <div className='button-container'>
                <button onClick={handleSetAlarm} disabled={!inputTime}>Set Alarm</button>
                <button onClick={handleAlarmClear}>Clear Alarm</button>
            </div>
            {isAlarmSet && <p>Alarm set for: {alarmTime}</p>}
        </div>
    );
};

export default Alarm;
