// src/components/dashboard/ImageManager.js
import React, { useState } from 'react';
import '../../assets/styles/ImageManager.css'; 

const imageData = {
    All: [
        { id: 1, name: 'Image 1', createdDate: '2024-10-01', url: 'https://www.w3schools.com/w3images/lights.jpg' },
        { id: 2, name: 'Image 2', createdDate: '2024-10-02', url: 'https://www.w3schools.com/w3images/fjords.jpg' },
        { id: 3, name: 'Image 3', createdDate: '2024-10-03', url: 'https://www.w3schools.com/w3images/mountains.jpg' },
        { id: 4, name: 'Image 4', createdDate: '2024-10-04', url: 'https://www.w3schools.com/w3images/nature.jpg' },
        { id: 5, name: 'Image 5', createdDate: '2024-10-01', url: 'https://www.w3schools.com/w3images/ocean.jpg' },
        { id: 6, name: 'Image 6', createdDate: '2024-10-02', url: 'https://www.w3schools.com/w3images/forest.jpg' },
        { id: 7, name: 'Image 7', createdDate: '2024-10-03', url: 'https://www.w3schools.com/w3images/snow.jpg' },
        { id: 8, name: 'Image 8', createdDate: '2024-10-04', url: 'https://www.w3schools.com/w3images/waterfall.jpg' },
        { id: 9, name: 'Image 9', createdDate: '2024-10-01', url: 'https://www.w3schools.com/w3images/bridge.jpg' },
        { id: 10, name: 'Image 10', createdDate: '2024-10-02', url: 'https://www.w3schools.com/w3images/rock.jpg' },
        { id: 11, name: 'Image 11', createdDate: '2024-10-03', url: 'https://www.w3schools.com/w3images/forest2.jpg' },
        { id: 12, name: 'Image 12', createdDate: '2024-10-04', url: 'https://www.w3schools.com/w3images/lakes.jpg' },
    ],
    Album: [
        { id: 1, name: 'Album Image 1', createdDate: '2024-10-01', url: 'https://www.w3schools.com/w3images/lights.jpg' },
        { id: 2, name: 'Album Image 2', createdDate: '2024-10-02', url: 'https://www.w3schools.com/w3images/fjords.jpg' },
    ],
    Member: [
        { id: 3, name: 'Member Image 1', createdDate: '2024-10-03', url: 'https://www.w3schools.com/w3images/mountains.jpg' },
        { id: 4, name: 'Member Image 2', createdDate: '2024-10-04', url: 'https://www.w3schools.com/w3images/nature.jpg' },
    ],
    Group: [
        { id: 5, name: 'Group Image 1', createdDate: '2024-10-01', url: 'https://www.w3schools.com/w3images/ocean.jpg' },
        { id: 6, name: 'Group Image 2', createdDate: '2024-10-02', url: 'https://www.w3schools.com/w3images/forest.jpg' },
    ],
};

const ImageCard = ({ image }) => (
    <div className="image-card">
        <img className="image-preview" src={image.url} alt={image.name} />
        <h3>{image.name}</h3>
        <p>{image.createdDate}</p>
        <button className="view-button">View</button>
    </div>
);

const ImageManager = () => {
    const [activeTab, setActiveTab] = useState('All');

    return (
        <div className="image-manager">
            <h2>Image Manager</h2>
            <div className="tab-list">
                {Object.keys(imageData).map(tab => (
                    <button
                        key={tab}
                        className={`tab-button ${activeTab === tab ? 'active' : ''}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="image-grid">
                {imageData[activeTab].map(image => (
                    <ImageCard key={image.id} image={image} />
                ))}
            </div>
        </div>
    );
};

export default React.memo(ImageManager);
