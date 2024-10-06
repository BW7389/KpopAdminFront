// src/components/dashboard/Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import '../../assets/styles/Sidebar.css'; 

const Sidebar = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsCollapsed(!isCollapsed);
    };

    return (
        <div className={`sidebar ${isCollapsed ? 'collapsed' : ''}`}>
            <div className="toggle-btn" onClick={toggleSidebar}>
                <FontAwesomeIcon icon={isCollapsed ? faChevronRight : faChevronLeft} />
            </div>
            <ul>
                <li><Link to="/dashboard/videos">Video Manager</Link></li>
                <li><Link to="/dashboard/images">Image Manager</Link></li>
                <li><Link to="/dashboard/users">User Manager</Link></li>
            </ul>
        </div>
    );
};

export default Sidebar;
