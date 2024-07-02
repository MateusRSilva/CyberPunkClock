import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment-timezone';
import '../App.css'

const GlobalClock = () => {
    const [selectedCountries, setSelectedCountries] = useState([]);
    const [availableCountries] = useState([
        "Europe/London",
        "America/New_York",
        "Asia/Tokyo",
        "Australia/Sydney",
        "Europe/Paris",
        "Europe/Berlin",
        "Europe/Moscow",
        "Asia/Dubai",
    ]);

    const addCountry = async (timezone) => {
        if (selectedCountries.length < 6) {
            try {
                const response = await axios.get(`https://worldtimeapi.org/api/timezone/${timezone}`);
                const time = response.data.datetime;
                setSelectedCountries(prevCountries => [
                    ...prevCountries,
                    { name: timezone, time: moment(time).tz(timezone).format('HH:mm:ss') }
                ]);
            } catch (error) {
                console.error('Error fetching global time:', error);
            }
        }
    };

    const removeCountry = (timezone) => {
        setSelectedCountries(prevCountries => prevCountries.filter(country => country.name !== timezone));
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setSelectedCountries(prevCountries =>
                prevCountries.map(country => ({
                    ...country,
                    time: moment().tz(country.name).format('HH:mm:ss')
                }))
            );
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='container'>
            <div className="global-clock">
                <h2>World Clock</h2>
                <select onChange={(e) => addCountry(e.target.value)} defaultValue="">
                    <option value="" disabled>Select a capital city</option>
                    {availableCountries.map((timezone, index) => (
                        <option key={index} value={timezone}>{timezone.split('/')[1]}</option>
                    ))}
                </select>
                <div className="selected-countries">
                    {selectedCountries.map((country, index) => (
                        <div key={index} className="country-clock">
                            <div>{country.name.split('/')[1]}</div>
                            <div>{country.time}</div>
                            <button onClick={() => removeCountry(country.name)}>x</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default GlobalClock;
