// src/features/home/SocialMediaFeed.js
import React from 'react';

const SocialMediaFeed = ({ platform, data }) => {
  return (
    <div className="card shadow-sm mb-4">
      <div className="card-header text-center bg-primary text-white">
        <h4 className="mb-0">{platform} Feed</h4>
      </div>
      <div className="card-body">
        {data.length ? (
          data.map((item, index) => (
            <div key={index} className="feed-item p-2 border-bottom">
              <p>{item.content}</p>
            </div>
          ))
        ) : (
          <p className="text-muted">No content available</p>
        )}
      </div>
    </div>
  );
};

export default SocialMediaFeed;
