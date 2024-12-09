// frontend/Dashboard.js
import React, { useEffect, useState } from "react";
import "../styles/ProjectSection.css";
import Footer from '../components/footer';

// Import logos from assets/index.js
import { 
  spider, 
  delta, 
  ecell, 
  graphique, 
  sigma, 
  ever, 
  oedc, 
  td, 
  fh, 
  max, 
  rmi, 
  psi, 
  dc, 
  naksh, 
  db, 
  prof, 
  scient 
} from '../assets';

const Dashboard = () => {
  const [clubs, setClubs] = useState([]);

  // Fetch clubs data from backend
  useEffect(() => {
    const fetchClubs = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/clubs/clubdata", {
          method: "GET",
          headers: {
            "Authorization": `Bearer ${localStorage.getItem('token')}`, // Add token in the header
          },
        });
        const data = await response.json();
        setClubs(data);
      } catch (error) {
        console.error("Error fetching clubs data:", error);
      }
    };

    fetchClubs();
  }, []);

  // A mapping of club names to their respective logo imports
  const logoMap = {
    SPIDER: spider,
    DELTA: delta,
    "E-CELL": ecell,
    "180-DC":oedc,
    GRAPHIQUE: graphique,
    SIGMA: sigma,
    EVER: ever,
    OEDC: oedc,
    "3D-AERODYNAMICS": td,
    "FORCE-HYPERLOOP": fh,
    MAXIMUS: max,
    RMI: rmi,
    PSI: psi,
    "DESIGNERS-CONSORTIUM": dc,
    NAKSHATRA: naksh,
    "DATA-BYTE": db,
    PROFNITT: prof,
    SCIENT: scient,
  };

  return (
    <>
      <div className="project-section">
        <h2>CLUBS</h2>
        <div className="projects-grid">
          {clubs.map((club, index) => {
            // Find the logo using the club name from the logoMap
            const logo = logoMap[club.name.toUpperCase()] || null; // Default to null if logo is not found

            return (
              <div key={index} className="project-item">
                {logo ? (
                  <img src={logo} alt={club.name} />
                ) : (
                  <div>No Image Available</div>
                )}
                <div className="projectname">{club.name}</div>
                <div className="credits">Credits: {club.credits}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
