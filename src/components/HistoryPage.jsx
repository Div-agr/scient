
import React, { useState, useEffect } from 'react';
import '../styles/HistoryPage.css';
import { scient } from '../assets';

const HistoryPage = () => {
  const [historyData, setHistoryData] = useState([]);

  // Fetch booking history from the backend
  useEffect(() => {
    const fetchHistoryData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bookings/history', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // JWT token
          },
        });

        const data = await response.json();
        if (response.ok) {
          setHistoryData(data); // Set fetched data to state
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('Error fetching history data:', error);
      }
    };

    fetchHistoryData();
  }, []);

  return (
    <div className="app">
      <div className="history-container">
        <div className="history-header">
          <h2>HISTORY</h2>
        </div>
        <div className="history-items">
          {historyData.length === 0 ? (
            <p>No booking history available.</p>
          ) : (
            historyData.map((item, index) => (
              <div key={index} className="history-item">
                <div className="history-logo logo">
                  {/* Display the logo image */}
                  <img src={item.club.logo || scient} alt={item.club.name} />
                </div>
                <div className="history-info">
                  <span>Hall : {item.slot.hall}</span>
                  <span className="pipe">|</span>
                  <span>Slot : {item.slot.time}</span>
                  <span className="pipe">|</span>
                  <span>Date : {item.date}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default HistoryPage;
