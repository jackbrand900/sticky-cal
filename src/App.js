import React, { useState } from 'react';
import CalendarGrid from './components/CalendarGrid';

const DEFAULT_STICKER = process.env.PUBLIC_URL + "/stickers/link-dance.png";

function App() {
  const [stickers, setStickers] = useState(() => {
    const saved = localStorage.getItem('stickers');
    return saved ? JSON.parse(saved) : {};
  });

  const [currentMonth, setCurrentMonth] = useState(() => {
    const now = new Date();
    return new Date(now.getFullYear(), now.getMonth(), 1); // First of current month
  });

  const handleDayClick = (date) => {
    const dateKey = date.toISOString().slice(0, 10);
    const newStickers = { ...stickers };

    if (newStickers[dateKey]) {
      delete newStickers[dateKey];
    } else {
      newStickers[dateKey] = DEFAULT_STICKER;
    }

    setStickers(newStickers);
    localStorage.setItem('stickers', JSON.stringify(newStickers));
  };

  const goToPrevMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  };

  const goToNextMonth = () => {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9f9f9', paddingTop: '40px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '32px' }}>📅 Sticky Cal</h1>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px', gap: '20px' }}>
        <button style={{border: 'none', fontSize: 'x-large', background: 'none', cursor: 'pointer'}} onClick={goToPrevMonth}>&larr;</button>
        <h2 style={{ fontSize: '20px' }}>
          {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
        </h2>
        <button style={{border: 'none', fontSize: 'x-large', background: 'none', cursor: 'pointer'}} onClick={goToNextMonth}>&rarr;</button>
      </div>

      <CalendarGrid
        stickersData={stickers}
        onDayClick={handleDayClick}
        currentMonth={currentMonth}
      />
    </div>
  );
}

export default App;
