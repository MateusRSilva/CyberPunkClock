import React, { useState, useEffect } from 'react';
import moment from 'moment';
import '../App.css'

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timerID = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timerID);
    }, []);

    const formatTime = (time) => {
        return moment(time).format('HH:mm:ss');
    };

    return (
        <>
            <div className="clock">
                {formatTime(time)}
            </div>
        </>
    );
};

export default Clock;
