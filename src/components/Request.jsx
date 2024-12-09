import React, { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import '../styles/request.css';

const Request = () => {
  const [requests, setRequests] = useState([]);

  // Fetch pending bookings from the backend
  useEffect(() => {
    const fetchPendingBookings = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/bookings/pending', {
          method: 'GET',
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`, // JWT token
          },
        });

        const data = await response.json();
        if (response.ok) {
          setRequests(data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error('Error fetching requests:', error);
      }
    };

    fetchPendingBookings();
  }, []);

  // Approve booking
  const approveBooking = async (bookingId) => {
    try {
      const response = await fetch('http://localhost:5000/api/bookings/approve', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ bookingId }),
      });

      const data = await response.json();
      if (response.ok) {
        setRequests((prevRequests) =>
          prevRequests.map((request) =>
            request._id === bookingId ? { ...request, approved: true } : request
          )
        );
        alert('Booking approved');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error approving booking:', error);
    }
  };

  // Reject booking
  const rejectBooking = async (bookingId) => {
    try {
      const response = await fetch('http://localhost:5000/api/bookings/reject', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({ bookingId }),
      });

      const data = await response.json();
      if (response.ok) {
        setRequests((prevRequests) =>
          prevRequests.filter((request) => request._id !== bookingId)
        );
        alert('Booking rejected');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error rejecting booking:', error);
    }
  };

  return (
    <div className="container">
      <div className="requestsBox">
        <h2 className="title">PENDING BOOKINGS</h2>
        <div className="requestsList">
          {requests.map((request) => (
            <div key={request._id} className="requestCard">
              <div className="logoContainer">
                <img
                  src={request.club.logo} // Assuming logo URL is in club object
                  alt="Logo"
                  className="logoImage"
                />
              </div>
              <div className="requestInfo">
                <span>Club: {request.club.name}</span>
                <span>Slot: {request.slot.time}</span>
                <span>Date: {request.date}</span>
                <span>Status: {request.approved ? 'Approved' : 'Pending'}</span>
              </div>
              <div className="icons">
                {!request.approved && (
                  <>
                    <FaCheckCircle
                      color="green"
                      size={24}
                      onClick={() => approveBooking(request._id)}
                    />
                    <FaTimesCircle
                      color="red"
                      size={24}
                      onClick={() => rejectBooking(request._id)}
                    />
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Request;