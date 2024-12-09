import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import { spider, delta, ecell, max, sigma, oedc, dc, naksh, psi, rmi, graphique, td, prof, fh, db, ever, scient } from "../assets";

// Club logos (unchanged)
const clubLogos = {
  "SPIDER": spider,
  "DELTA": delta,
  "ECELL": ecell,
  "MAX": max,
  "SIGMA": sigma,
  "180DC": oedc,
  "DC": dc,
  "NAKSHATRA": naksh,
  "PSI": psi,
  "RMI": rmi,
  "GRAPHIQUE": graphique,
  "3D": td,
  "PROFNITT": prof,
  "FORCE HYPERLOOP": fh,
  "DATABYTE": db,
  "EVER": ever,
  "Scient": scient
};

const styles = {
  formContainer: {
    backgroundColor: '#111',
    color: '#FFD700',
    padding: '20px',
    borderRadius: '10px',
    width: '90%',
    maxWidth: '500px',
    margin: '0 auto',
    textAlign: 'center',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
  },
  heading: {
    marginBottom: '20px',
    fontSize: '1.5em',
    fontWeight: 'bold',
  },
  row: {
    marginBottom: '15px',
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    alignItems: 'center',
  },
  slotButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#444',
    color: '#FFD700',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1em',
    cursor: 'pointer',
  },
  input: {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #444',
    backgroundColor: '#222',
    color: '#FFD700',
    fontSize: '1em',
  },
  confirmButton: {
    width: '100%',
    maxWidth: '400px',
    padding: '10px',
    backgroundColor: '#FFD700',
    color: '#111',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '1.1em',
  },
  icon: {
    height: '100px',
    width: 'auto',
    margin: '10px auto',
  },
};

const responsiveStyles = `
  @media (max-width: 600px) {
    .formContainer {
      padding: 15px;
    }
    .slotButton, .confirmButton, .input {
      font-size: 0.9em;
      padding: 8px;
    }
    .heading {
      font-size: 1.2em;
    }
  }
`;

function BookingForm() {
  const [room, setRoom] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [members, setMembers] = useState('');
  const [reason, setReason] = useState('');
  const [club, setClub] = useState({ name: '' });

  useEffect(() => {
    const storedRoom = localStorage.getItem('room');
    const storedStartTime = localStorage.getItem('startTime');
    const storedEndTime = localStorage.getItem('endTime');

    if (storedRoom && storedStartTime && storedEndTime) {
      setRoom(storedRoom);
      const startTime = new Date(storedStartTime);
      const endTime = new Date(storedEndTime);
      setDate(startTime.toLocaleDateString());
      setTime(`${formatTime(startTime)} - ${formatTime(endTime)}`);
    }

    const fetchClubData = async () => {
      try {
        const token = localStorage.getItem("authToken");
        const response = await axios.get("http://localhost:5000/api/clubs/credits", {
          headers: { Authorization: `Bearer ${token}` },
        });
        const clubData = response.data;
        setClub({ name: clubData.name });
      } catch (error) {
        console.error("Error fetching club data:", error);
        if (error.response?.status === 401) {
          alert("Unauthorized access. Please log in again.");
          localStorage.removeItem("authToken");
          window.location.assign("/login");
        } else {
          alert("Failed to load club information. Please try again later.");
        }
      }
    };

    fetchClubData();
  }, []);

  const formatTime = (date) => date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const handleConfirm = async () => {
    try {
      // Prepare the data to be sent to the backend
      const bookingData = {
        slotTime: localStorage.getItem('startTime'),  // Get the start time from localStorage
        reason: reason,
        room: room,
      };
  
      // Make the POST request to create a booking
      const token = localStorage.getItem("authToken");
      if (!token) {
        alert("You are not authorized. Please log in.");
        return;
      }
  
      const response = await fetch("http://localhost:5000/api/bookings/", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(bookingData),  // Ensure bookingData is sent as JSON
      });
  
      // Check if the request was successful (status code 200-299)
      if (response.ok) {
        const responseData = await response.json(); // Parse the JSON data
        alert(responseData.message || "Booking successful!"); // Display the success message from the backend
      } else {
        const errorData = await response.json();
        alert(errorData.message || "Failed to create booking. Please try again.");
      }
    } catch (error) {
      console.error("Error creating booking:", error);
      alert("Failed to create booking. Please try again.");
    }
  };
  

  const clubImage = clubLogos[club.name] || null;

  return (
    <>
      <style>{responsiveStyles}</style>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>ROOM BOOKING</h2>
        <div style={styles.row}>
          <button style={styles.slotButton}>{`Room: ${room}`}</button>
          <button style={styles.slotButton}>{`Date: ${date}`}</button>
          <button style={styles.slotButton}>{time}</button>
        </div>
        {clubImage && <img src={clubImage} alt={club.name} style={styles.icon} />}
        <div style={styles.row}>
          <input
            type="text"
            placeholder="Members"
            style={styles.input}
            value={members}
            onChange={(e) => setMembers(e.target.value)}
          />
        </div>
        <div style={styles.row}>
          <input
            type="text"
            placeholder="Reason"
            style={styles.input}
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
        </div>
        <button style={styles.confirmButton} onClick={handleConfirm}>
          CONFIRM
        </button>
        <p style={{ marginTop: '15px', fontSize: '0.9em', color: '#FFD700' }}>
          For Weekends Contact: <a href="mailto:scient@nitt.edu" style={{ color: '#FFD700' }}>scient@nitt.edu</a>
        </p>
      </div>
    </>
  );
}

export default BookingForm;
