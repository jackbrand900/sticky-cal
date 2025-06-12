import React from 'react';
import DayCell from './DayCell';

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const CalendarGrid = ({ stickersData, onDayClick, currentMonth }) => {
  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const days = [];

  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(null);
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(year, month, i));
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '0 12px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: '4px'
      }}>
        {weekdays.map(day => (
          <div key={day}>{day}</div>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(7, 1fr)',
        gap: '2px'
      }}>
        {days.map((date, index) => {
          const key = date ? date.toISOString().slice(0, 10) : index;
          return (
            <DayCell
              key={key}
              date={date}
              sticker={date ? stickersData[date.toISOString().slice(0, 10)] : null}
              onClick={date ? () => onDayClick(date) : null}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;
