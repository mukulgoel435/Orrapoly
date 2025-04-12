import React, { useState, useEffect } from 'react';
import './typewriterheader.css';

const shades = [
  { name: 'Crimson Red', hex: '#DC143C' },
  { name: 'Maroon', hex: '#800000' },
  { name: 'Sunshine Yellow', hex: '#FFD700' },
  { name: 'Mustard', hex: '#FFDB58' },
  { name: 'Ocean Blue', hex: '#1E90FF' },
  { name: 'Indigo', hex: '#4B0082' },
  { name: 'Forest Green', hex: '#228B22' },
  { name: 'Olive', hex: '#808000' },
  { name: 'Royal Purple', hex: '#800080' },
  { name: 'Beige', hex: '#F5F5DC' },
  { name: 'Snow White', hex: '#FFFFFF' },
  { name: 'Charcoal Black', hex: '#2F2F2F' },
  { name: 'Peach', hex: '#FFDAB9' },
  { name: 'Turquoise', hex: '#40E0D0' },
];

const typingTexts = [
  'Thread Shades That Define Elegance',
  'Colors Crafted for Creativity',
  'Discover Shades Woven with Style',
];



// ✅ Fixed: This now returns JSX and works properly
const TypewriterHeader = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      const updatedText = isDeleting
        ? currentText.substring(0, displayText.length - 1)
        : currentText.substring(0, displayText.length + 1);
      setDisplayText(updatedText);

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % typingTexts.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex]);

  return (
    <h2 className="typewriter-heading">
    🎨 {displayText}
    </h2>
  );
};

const ShadeCard = () => {
  const [selected, setSelected] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const cardSize = {
    width: isMobile ? '80px' : '110px',
    height: isMobile ? '110px' : '150px',
  };

  const fontSize = isMobile ? '0.7rem' : '0.85rem';

  return (
    <div style={{
      background: '#f3ede3',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
    }}>
      {/* ✅ Correct usage of typewriter header */}
      <TypewriterHeader />

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1rem',
        maxWidth: '1000px',
        marginTop: '2rem',
      }}>
        {shades.map((shade, idx) => (
          <div
            key={idx}
            onClick={() => setSelected(shade.hex)}
            style={{
              ...cardSize,
              borderRadius: '16px',
              backgroundColor: shade.hex,
              border: selected === shade.hex ? '3px solid #ff7b00' : '2px solid #ddd',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'flex-end',
              justifyContent: 'center',
              position: 'relative',
              boxShadow: selected === shade.hex ? '0 0 15px #ff7b00' : '0 2px 5px rgba(0,0,0,0.15)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease',
              transform: selected === shade.hex ? 'scale(1.08)' : 'scale(1)',
            }}
            onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.08)'}
            onMouseLeave={e => {
              e.currentTarget.style.transform = selected === shade.hex ? 'scale(1.08)' : 'scale(1)';
            }}
          >
            <span style={{
              position: 'absolute',
              bottom: '10px',
              background: 'rgba(255, 255, 255, 0.85)',
              padding: '4px 8px',
              borderRadius: '6px',
              fontSize: fontSize,
              fontWeight: '500',
              color: '#333',
              boxShadow: '0 0 5px rgba(0,0,0,0.1)'
            }}>
              {shade.name}
            </span>
          </div>
        ))}
      </div>

      {selected && (
        <p style={{ marginTop: '2rem', fontSize: '1.2rem', color: '#444', textAlign: 'center' }}>
          Selected Shade: <strong>{selected}</strong>
        </p>
      )}
    </div>
  );
};

export default ShadeCard;
