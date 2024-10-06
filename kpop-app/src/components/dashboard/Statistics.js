// src/components/dashboard/Statistics.js
import React from 'react';
import '../../assets/styles/Statistics.css'; 
import { FaVideo, FaImage } from 'react-icons/fa'; // Importing icons

const Statistics = () => {
    const statisticsData = [
        { label: 'Total Videos', value: 50, icon: <FaVideo /> },
        { label: 'Total Images', value: 100, icon: <FaImage /> },
    ];

    return (
        <div className="statistics">
            <h2>Statistics</h2>
            <div className="stat-items">
                {statisticsData.map((stat, index) => (
                    <div className="stat-item" key={index}>
                        <span className="stat-icon">{stat.icon}</span>
                        <div className="stat-info">
                            <span className="stat-label">{stat.label}</span>
                            <span className="stat-value">{stat.value}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Statistics;
