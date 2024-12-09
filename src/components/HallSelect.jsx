import React from 'react';
import { useNavigate } from 'react-router-dom';

function HallSelect() {
  const navigate = useNavigate();

  const handleNavigation = async (hall) => {
      localStorage.setItem("selectedRoom", hall);
      // Handle response and navigation
      navigate('/userdashboard/slots');
  };

  return (
    <div style={styles.container}>
      <div style={styles.bookingContainer}>
        <h2 style={styles.heading}>ROOM BOOKING</h2>
        <div
          style={styles.hallButtonLarge}
          onClick={() => handleNavigation('C1')} 
        >
          HALL - C1
        </div>
        <div style={styles.hallButtonRow}>
          <div
            style={styles.hallButtonSmall}
            onClick={() => handleNavigation('C2')} 
          >
            HALL - C2
          </div>
          <div
            style={styles.hallButtonSmall}
            onClick={() => handleNavigation('C3')} 
          >
            HALL - C3
          </div>
        </div>
        <p style={styles.contactText}>
          For Weekends Contact:{' '}
          <a href="mailto:scient@nitt.edu" style={styles.contactLink}>
            scient@nitt.edu
          </a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    backgroundColor: '#1a1a1a',
    color: '#FFD700',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bookingContainer: {
    textAlign: 'center',
    marginTop: '50px',
    backgroundColor: '#333',
    padding: '30px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '500px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
  heading: {
    fontSize: '1.5em',
    marginBottom: '30px',
    color: '#FFD700',
  },
  hallButtonLarge: {
    padding: '20px',
    backgroundColor: '#444',
    color: '#FFD700',
    fontSize: '1.2em',
    borderRadius: '10px',
    marginBottom: '20px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s',
  },
  hallButtonRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    justifyContent: 'center',
  },
  hallButtonSmall: {
    flex: '1 1 45%', // Ensures that each button takes up 45% of the row
    padding: '15px',
    backgroundColor: '#444',
    color: '#FFD700',
    fontSize: '1em',
    borderRadius: '10px',
    cursor: 'pointer',
    textAlign: 'center',
    transition: 'background-color 0.3s',
  },
  contactText: {
    marginTop: '20px',
    color: '#ccc',
  },
  contactLink: {
    color: '#FFD700',
    textDecoration: 'none',
  },

  // Responsive Styles
  '@media (max-width: 600px)': {
    bookingContainer: {
      padding: '20px',
    },
    heading: {
      fontSize: '1.3em',
    },
    hallButtonLarge: {
      padding: '15px',
      fontSize: '1em',
    },
    hallButtonSmall: {
      flex: '1 1 100%', // Stack buttons vertically on small screens
      padding: '12px',
    },
  },
};

export default HallSelect;
