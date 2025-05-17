import React from 'react';
// No separate CSS needed, styling can be direct or via App.css

function VintageToggle({ isVintageMode, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        padding: '8px 15px',
        fontFamily: 'var(--font-body)',
        backgroundColor: isVintageMode ? 'var(--accent-color)' : 'var(--primary-color)',
        color: 'white',
        border: 'none',
        borderRadius: 'var(--border-radius)',
        cursor: 'pointer',
        fontSize: '0.9rem',
        marginLeft: '20px',
        transition: 'background-color var(--transition-speed)',
      }}
      aria-pressed={isVintageMode}
      title={isVintageMode ? "Disable Vintage Look" : "Enable Vintage Look"}
    >
      {isVintageMode ? 'Modern View' : 'Vintage View'}
    </button>
  );
}

export default VintageToggle;
