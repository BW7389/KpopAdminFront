import React, { useState } from 'react';
import '../../assets/styles/VideoManager.css';

const videoData = [
    { title: 'Video 1', createdDate: '2024-10-01', id: 1, src: 'https://www.w3schools.com/html/mov_bbb.mp4', album: 'Nature', member: 'John', group: 'Wildlife' },
    { title: 'Video 2', createdDate: '2024-10-02', id: 2, src: 'https://www.w3schools.com/html/mov_bbb.mp4', album: 'Nature', member: 'John', group: 'Wildlife' },
    { title: 'Video 3', createdDate: '2024-10-03', id: 3, src: 'https://www.w3schools.com/html/mov_bbb.mp4', album: 'Adventure', member: 'Doe', group: 'Explorers' },
    { title: 'Video 4', createdDate: '2024-10-04', id: 4, src: 'https://www.w3schools.com/html/mov_bbb.mp4', album: 'Adventure', member: 'Doe', group: 'Explorers' },
    { title: 'Video 5', createdDate: '2024-10-05', id: 5, src: 'https://www.w3schools.com/html/mov_bbb.mp4', album: 'City', member: 'Alice', group: 'Travel' },
    // Add more videos as needed
];

const VideoCard = ({ video }) => (
    <div className="video-card">
        <video className="video-preview" controls>
            <source src={video.src} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <h3>{video.title}</h3>
        <p>Created: {video.createdDate}</p>
        {/* Optional buttons for additional actions */}
    </div>
);

const VideoManager = () => {
    const [activeTab, setActiveTab] = useState('all'); // Tracks the currently active tab

    // Filter video data based on the active tab
    const filteredVideos = videoData.filter(video => {
        if (activeTab === 'all') return true;
        if (activeTab === 'album') return video.album === 'Nature'; // Adjust this condition to be dynamic
        if (activeTab === 'member') return video.member === 'John'; // Adjust this condition to be dynamic
        if (activeTab === 'group') return video.group === 'Wildlife'; // Adjust this condition to be dynamic
        return false;
    });

    return (
        <div className="video-manager">
            <h2>Video Manager</h2>
            {/* Tabs */}
            <div className="tabs">
                <button className={activeTab === 'all' ? 'active' : ''} onClick={() => setActiveTab('all')}>
                    All Videos
                </button>
                <button className={activeTab === 'album' ? 'active' : ''} onClick={() => setActiveTab('album')}>
                    By Album
                </button>
                <button className={activeTab === 'member' ? 'active' : ''} onClick={() => setActiveTab('member')}>
                    By Member
                </button>
                <button className={activeTab === 'group' ? 'active' : ''} onClick={() => setActiveTab('group')}>
                    By Group
                </button>
            </div>

            {/* Video Grid */}
            <div className="video-grid">
                {filteredVideos.map(video => (
                    <VideoCard key={video.id} video={video} />
                ))}
            </div>
        </div>
    );
};

export default React.memo(VideoManager);
