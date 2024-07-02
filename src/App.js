import React, { useState } from 'react';
import Clock from './components/Clock';
import Alarm from './components/Alarm';
import GlobalClock from './components/Globalclock';
import Stopwatch from './components/Stopwatch';
import './App.css';

function App() {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    const getMarkerTransform = (activeTab) => {
        switch (activeTab) {
            case "tab1":
                return "translateY(calc(calc(50vh / 3) * 0.45))";
            case "tab2":
                return "translateY(calc(calc(50vh / 3) * 1.95))";
            case "tab3":
                return "translateY(calc(calc(50vh / 3) * 3.44))";
            case "tab4":
                return "translateY(calc(calc(50vh / 3) * 4.94))";
            default:
                return "translateY(0)";
        }
    };

    return (
        <div className="App">
            <div className="background-gif"></div>
            <div className="popup">
                <div className="tabs">
                    <div
                        className={`tab ${activeTab === "tab1" ? "active" : ""}`}
                        onClick={() => handleTabChange("tab1")}
                    >
                        Clock
                    </div>
                    <div
                        className={`tab ${activeTab === "tab2" ? "active" : ""}`}
                        onClick={() => handleTabChange("tab2")}
                    >
                        Alarm
                    </div>
                    <div
                        className={`tab ${activeTab === "tab3" ? "active" : ""}`}
                        onClick={() => handleTabChange("tab3")}
                    >
                        World Clock
                    </div>
                    <div
                        className={`tab ${activeTab === "tab4" ? "active" : ""}`}
                        onClick={() => handleTabChange("tab4")}
                    >
                        Stopwatch
                    </div>
                    <div className="marker" style={{ transform: getMarkerTransform(activeTab) }}>
                        <div id="top"></div>
                        <div id="bottom"></div>
                    </div>
                </div>
                <div className="tab-content">
                    {activeTab === "tab1" && <Clock />}
                    {activeTab === "tab2" && <Alarm />}
                    {activeTab === "tab3" && <GlobalClock />}
                    {activeTab === "tab4" && <Stopwatch />}
                </div>
            </div>
        </div>
    );
}

export default App;
