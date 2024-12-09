import React, { useEffect, useState } from "react";
import "../styles/ProjectSection.css";
import Footer from "../components/footer";
import axios from "axios";
import { spider, delta, ecell, max, sigma, oedc, dc, naksh, psi, rmi, graphique, td, prof, fh, db, ever,scient } from "../assets";

const UserDashboard = () => {
  const [club, setClub] = useState({
    name: "Loading...",
    credits: 0, // Default value
  });

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

  // Fetch club data on component load
  useEffect(() => {
    const fetchClubData = async () => {
      try {
        // Retrieve the token from localStorage (or sessionStorage)
        const token = localStorage.getItem("authToken");

        if (!token) {
          alert("You are not logged in. Please log in first.");
          return;
        }

        // API call to fetch credits
        const response = await axios.get("http://localhost:5000/api/clubs/credits", {
          headers: {
            Authorization: `Bearer ${token}`, // Include token in Authorization header
          },
        });

        const clubData = response.data;

        setClub((prevClub) => ({
          ...prevClub,
          name: clubData.name,
          credits: clubData.credits,
        }));
      } catch (error) {
        console.error("Error fetching club data:", error);
        if (error.response && error.response.status === 401) {
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

  const handleClick = (event) => {
    event.preventDefault();

    if (club.credits === 0) {
      alert("You don't have enough credits to proceed.");
      return; // Prevent navigation
    }

    // Navigate to the next page if credits > 0
    window.location.assign("/userdashboard/days");
  };

  // Get the image for the specific club based on the club name
  const clubImage = clubLogos[club.name] || ""; // Default to empty if not found

  return (
    <>
      <div className="project-section">
        <h2>CLUB</h2>
        <div className="projects-grid">
          <div className="project-item" onClick={handleClick}>
            {/* Display the club logo */}
            {clubImage && <img src={clubImage} alt={`${club.name} logo`} />}
            <div className="projectname">{club.name}</div>
            <div className="credits">Credits: {club.credits}</div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserDashboard;