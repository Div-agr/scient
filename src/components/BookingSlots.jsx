import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

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
    width: '100%',
    maxWidth: '1200px',
    boxSizing: 'border-box',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
  },
  heading: {
    fontSize: '1.5em',
    marginBottom: '30px',
    color: '#FFD700',
  },
  slotsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', // Increased min slot width
    gap: '15px', // Slightly larger gap between slots
    width: '100%',
    boxSizing: 'border-box',
  },
  slot: {
    padding: '30px', // Increased padding for larger slots
    backgroundColor: '#222',
    color: '#FFD700',
    fontSize: '1.2em', // Increased font size for better visibility
    border: '1px solid #FFD700',
    borderRadius: '10px', // Slightly larger border radius
    textAlign: 'center',
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: 'transform 0.2s',
  },
  slotHover: {
    transform: 'scale(1.05)',
  },
  confirmationPopup: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#444',
    color: '#FFD700',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0, 0, 0, 0.5)',
    textAlign: 'center',
    width: '300px',
    zIndex: 1000,
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 999,
  },
  confirmationTitle: {
    fontSize: '1.2em',
    marginBottom: '15px',
    color: '#FFD700',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  confirmButton: {
    padding: '10px 15px',
    backgroundColor: '#28a745',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.2s',
  },
  confirmButtonHover: {
    backgroundColor: '#218838',
  },
  cancelButton: {
    padding: '10px 15px',
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1em',
    transition: 'background-color 0.2s',
  },
  cancelButtonHover: {
    backgroundColor: '#c82333',
  },
};

const formatTime = (dateString) => {
  const options = { hour: '2-digit', minute: '2-digit' };
  return new Date(dateString).toLocaleTimeString([], options);
};

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString([], {
    weekday: 'short', // e.g., "Mon"
    year: 'numeric',
    month: 'short', // e.g., "Jan"
    day: 'numeric',
  });
};

const SlotBooking = () => {
  const navigate = useNavigate();
  const [slots, setSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const fetchSlots = async () => {
    try {
      const token = localStorage.getItem('authToken');
      const selectedDate = localStorage.getItem('selectedDate');
      const selectedRoom = localStorage.getItem('selectedRoom');

      if (!selectedDate || !selectedRoom) {
        console.error('No date or room found in localStorage.');
        return;
      }

      const response = await axios.get('http://localhost:5000/api/clubs/slots/available', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          date: selectedDate,
          room: selectedRoom,
        },
      });
      setSlots(response.data.slots);
    } catch (error) {
      console.error('Error fetching slots:', error.message);
    }
  };

  const handleSlotClick = (slot) => {
    if (!slot.booked) {
      setSelectedSlot(slot);
    }
  };

  const handleBookingSubmit = async () => {
      localStorage.setItem("room", selectedSlot.room);
      localStorage.setItem("startTime",selectedSlot.startTime);
      localStorage.setItem("endTime",selectedSlot.endTime);
      setSelectedSlot(null);
      navigate('/userdashboard/bookingform');
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.bookingContainer}>
        <h2 style={styles.heading}>Slot Booking</h2>
        <div style={styles.slotsContainer}>
          {slots.map((slot) => (
            <div
              key={slot._id}
              onClick={() => handleSlotClick(slot)}
              style={{
                ...styles.slot,
                ...(slot.booked && { backgroundColor: '#555' }),
                ...(selectedSlot && selectedSlot._id === slot._id && styles.slotHover),
              }}
            >
              <div className="slot-details">
                <p className="room">{slot.room}</p>
                <p className="date">{formatDate(slot.startTime)}</p> {/* Display Date */}
                <p className="time">
                  {formatTime(slot.startTime)} - {formatTime(slot.endTime)}
                </p>
              </div>
            </div>
          ))}
        </div>
        {selectedSlot && (
          <>
            <div style={styles.overlay} onClick={() => setSelectedSlot(null)} />
            <div style={styles.confirmationPopup}>
              <h3 style={styles.confirmationTitle}>Confirm Booking</h3>
              <p>
                <strong>Room:</strong> {selectedSlot.room} <br />
                <strong>Date:</strong> {formatDate(selectedSlot.startTime)} <br />
                <strong>Time:</strong> {formatTime(selectedSlot.startTime)} -{' '}
                {formatTime(selectedSlot.endTime)}
              </p>
              <div style={styles.buttonContainer}>
                <button
                  style={styles.confirmButton}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = styles.confirmButtonHover.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = styles.confirmButton.backgroundColor)
                  }
                  onClick={handleBookingSubmit}
                >
                  Confirm
                </button>
                <button
                  style={styles.cancelButton}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = styles.cancelButtonHover.backgroundColor)
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = styles.cancelButton.backgroundColor)
                  }
                  onClick={() => setSelectedSlot(null)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default SlotBooking;