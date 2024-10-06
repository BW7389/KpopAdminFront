// src/components/dashboard/UserProfile.js
import React from 'react';
import '../../assets/styles/UserProfile.css'; 
import { FaEnvelope, FaUser, FaEdit, FaTrash } from 'react-icons/fa'; // Importing icons

const UserProfile = () => {
    const userInfo = {
        email: 'user@example.com',
        username: 'UserName', // Example additional info
        bio: 'This is a short bio about the user.', // Example bio
    };

    return (
        <div className="user-profile">
            <h2>User Profile</h2>
            <div className="profile-details">
                <div className="profile-item">
                    <FaUser className="profile-icon" />
                    <div>
                        <span className="info-label">Username:</span>
                        <span className="info-value">{userInfo.username}</span>
                    </div>
                </div>
                <div className="profile-item">
                    <FaEnvelope className="profile-icon" />
                    <div>
                        <span className="info-label">Email:</span>
                        <span className="info-value">{userInfo.email}</span>
                    </div>
                </div>
            </div>
            <div className="bio-section">
                <span className="info-label">Bio:</span>
                <p className="info-value">{userInfo.bio}</p>
            </div>
            {/* <div className="profile-actions">
                <button className="edit-button">Edit Profile <FaEdit /></button>
                <button className="delete-button">Delete Account <FaTrash /></button>
            </div> */}
        </div>
    );
};

export default UserProfile;
