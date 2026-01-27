// src/components/VideoSnippet.js
import React from 'react';

export default function VideoSnippet({ src, poster, title, width = "100%" }) {
  return (
    <div style={{ margin: '1.5rem 0', maxWidth: '100%' }}>
      <video
        controls
        width={width}
        poster={poster}
        style={{
          borderRadius: '6px',
          border: '1px solid #eaeaea',
          background: '#f8f8f8',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {title && (
        <p style={{
          textAlign: 'center',
          fontSize: '0.9em',
          color: '#666',
          marginTop: '0.5rem',
          fontWeight: '500'
        }}>
          {title}
        </p>
      )}
    </div>
  );
}