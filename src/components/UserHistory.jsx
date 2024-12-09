import React from 'react';
import '../styles/HistoryPage.css';
import { scient } from '../assets';

const  UserHistory=()=> {
  const historyData = [
    { hall: 'C2', slot: 20, date: '31/10/2024' },
    { hall: 'C2', slot: 20, date: '31/10/2024' },
    { hall: 'C2', slot: 20, date: '31/10/2024' },
  ];

  return (
    <div className="app">
      <div className="history-container">
        <div className="history-header">
          <h2>HISTORY</h2>
        </div>
        <div className="history-items">
          {historyData.map((item, index) => (
            <div key={index} className="history-item">
              <div className="history-logo logo">
                <img src={scient} alt='SCIEnT'></img>
              </div>
              <div className="history-info">
                <span>Hall : {item.hall}</span>
                <span className='pipe'>|</span>
                <span>Slot : {item.slot}</span>
                <span className='pipe'>|</span>
                <span>Date : {item.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserHistory;