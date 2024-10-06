// src/components/dashboard/Dashboard.js
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import VideoManager from './VideoManager';
import ImageManager from './ImageManager';
import Statistics from './Statistics';
import UserProfile from './UserProfile';
import '../../assets/styles/Dashboard.css'; 
import '../../assets/styles/Sidebar.css';

const Dashboard = () => {
    const [isCollapsed, setIsCollapsed] = useState(false); // Manage sidebar state

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className="dashboard">
            <Sidebar isCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
            <div className={`dashboard-container ${isCollapsed ? 'collapsed' : ''}`}>
                <Header />
                <div className="main-content">
                    <div className="content">
                        <Statistics />
                        <VideoManager />
                        <ImageManager />
                        <UserProfile />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
