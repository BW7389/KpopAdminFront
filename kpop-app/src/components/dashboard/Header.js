// src/components/dashboard/Header.js
import React from 'react';
import '../../assets/styles/Header.css';

const avatarImage = "https://www.w3schools.com/w3images/avatar2.png"; // W3Schools Avatar Image
const logoutIcon = "https://www.w3schools.com/w3images/logout.png"; // W3Schools Logout Icon

const WelcomeCard = ({ avatar, username, isActive }) => (
    <div className="welcome-card">
        <img src={avatar} alt={`${username}'s avatar`} />
        <div>
            <span className="username">Welcome, {username}</span>
            <div className={`activity-status ${isActive ? 'active' : 'inactive'}`}></div>
        </div>
    </div>
);

const Header = () => {
    const username = "User"; 
    const isActive = true;

    return (
        <header className="header">
            <h1 className="logo">Kpop Management</h1>
            <div className="user-info">
                <WelcomeCard avatar={avatarImage} username={username} isActive={isActive} />
                <button className="logout-button" aria-label="Logout">
                    <img src={logoutIcon} alt="Logout Icon" className="logout-icon" />
                    Logout
                </button>
            </div>
        </header>
    );
};

export default React.memo(Header);
