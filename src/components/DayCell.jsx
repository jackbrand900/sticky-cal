import React from 'react';

const DayCell = ({ date, sticker, onClick }) => {
  const isEmpty = !date;

  const today = new Date();
  const isToday = date &&
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  return (
    <div
      onClick={onClick}
      style={{
        boxSizing: 'border-box', 
        border: isEmpty ? 'none' : isToday ? '2px solid #3b82f6' : '1px solid #ddd',
        borderRadius: '6px',
        width: '100%',
        aspectRatio: '1 / 1',
        textAlign: 'center',
        position: 'relative',
        backgroundColor: isEmpty ? 'transparent' : '#fff',
        cursor: isEmpty ? 'default' : 'pointer'
      }}
    >
      {!isEmpty && (
        <>
          <div style={{ position: 'absolute', top: 6, left: 6, fontSize: '12px' }}>
            {date.getDate()}
          </div>
          {sticker && (
            <img
              src={sticker}
              alt="sticker"
              style={{
                width: '75px',
                height: '65px',
                marginTop: '28px'
              }}
            />
          )}
        </>
      )}
    </div>
  );
};

export default DayCell;
