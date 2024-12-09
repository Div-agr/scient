import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function BookingDays() {
  const navigate = useNavigate();
  const [today, setToday] = useState(0); // Default value is Sunday (0)

  // Simulate setting "Wednesday" as today (for testing purposes)
  useEffect(() => {
    const currentDate = new Date();
    setToday(currentDate.getDay());
  }, []);

  const handleDayClick = async (day, index) => {
    const currentDate = new Date();
    const selectedDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate() + (index - today)
    );
  
    // Set time to midnight (00:00:00) to avoid time zone issues
    selectedDate.setHours(0, 0, 0, 0);
  
    // Format the date as YYYY-MM-DD manually to avoid UTC conversion
    const formattedDate = selectedDate.getFullYear() + '-' +
                          String(selectedDate.getMonth() + 1).padStart(2, '0') + '-' +
                          String(selectedDate.getDate()).padStart(2, '0');
  
    localStorage.setItem("selectedDate", selectedDate);
    // Handle response and navigation
    navigate('/userdashboard/halls');
  };
  

  const daysOfWeek = [
    'SUNDAY',
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
  ];

  return (
    <div className="booking-container">
      <main className="main-content">
        <div className="day-buttons">
          {daysOfWeek.map((day, index) => {
            const isWeekend = index === 0 || index === 6; // Sunday (0) and Saturday (6)
            const isPastDay = index < today && !isWeekend; // Past days except weekends
            return (
              <button
                key={day}
                onClick={!isPastDay && !isWeekend ? () => handleDayClick(day, index) : undefined}
                className={isPastDay || isWeekend ? 'disabled' : ''}
              >
                {day}
              </button>
            );
          })}
        </div>
        <p className="contact-text">
          For Weekends Contact: <a href="mailto:scient@nitt.edu">scient@nitt.edu</a>
        </p>
      </main>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: Arial, sans-serif;
        }

        .booking-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          background-color: #111;
          color: #fff;
          min-height: 100vh;
          padding: 20px;
        }

        .main-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          margin-top: 40px;
          width: 100%;
        }

        .day-buttons {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin: 30px 0;
          width: 100%;
          max-width: 800px;
        }

        .day-buttons button {
          padding: 30px 0;
          font-size: 1.5em;
          font-weight: bold;
          color: #fff;
          background-color: transparent;
          border: 3px solid #FFD700;
          border-radius: 10px;
          cursor: pointer;
          transition: background-color 0.3s, color 0.3s;
        }

        .day-buttons button:hover {
          background-color: #FFD700;
          color: #111;
        }

        .day-buttons button.disabled {
          background-color: #555;
          color: #ccc;
          border-color: #444;
          cursor: not-allowed;
        }

        .day-buttons button.disabled:hover {
          background-color: #555;
          color: #ccc;
        }

        .contact-text {
          color: #fff;
          font-size: 1em;
          margin-top: 40px;
        }

        .contact-text a {
          color: #FFD700;
          text-decoration: none;
        }

        .contact-text a:hover {
          text-decoration: underline;
        }

        @media (max-width: 800px) {
          .day-buttons {
            grid-template-columns: repeat(2, 1fr);
          }

          .day-buttons button {
            padding: 20px 0;
            font-size: 1.2em;
          }
        }

        @media (max-width: 500px) {
          .day-buttons {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
}

export default BookingDays;
