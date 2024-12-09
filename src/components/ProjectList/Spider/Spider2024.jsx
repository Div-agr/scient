import React, { useState } from 'react';
import '../../../styles/AllProj.css';
import spi1 from '../../../assets/spi-22-1.png';
import spi2 from '../../../assets/spi-22-2.png';
import spi3 from '../../../assets/spi-22-3.png';
import spid4 from '../../../assets/spi-22-4.png';
import spi2024_1 from '../../../assets/spi-24-1.png';
import spi2024_2 from '../../../assets/spi-24-2.png';
import spi2024_3 from '../../../assets/spi-24-3.png';
import spi4 from '../../../assets/spider.png';
import spi2023_1 from '../../../assets/spi-23-1.png';
import spi2023_2 from '../../../assets/spi-23-2.png';
import spi2023_3 from '../../../assets/spi-23-3.png';
import spi2023_4 from '../../../assets/spi-23-4.png';

// Projects for 2023 and 2024
const projects2023 = [
  {
    name: 'WatchTower',
    src: spi2023_1,
    description: "Watch Tower is an immersive open-world game designed to promote cyber-hygiene. Participants explore NITT's campus and complete tasks that teach real-life cyber-attacks and hone their security skills.",
    link: '#',
  },
  {
    name: 'Gym and pool registration',
    src: spi2023_2,
    description: 'This is a web project that aims to simplify the registration process for the techno gym and the swimming pool.',
    link: '#',
  },
  {
    name: 'Autonomous drone navigation',
    src: spi2023_3,
    description: 'This project focuses on advanced autonomous drone navigation using ArUco markers.',
    link: '#',
  },
  {
    name: 'Sportsfete',
    src: spi2023_4,
    description: 'A web project for Sportsfete, an intra-college sports fest.',
    link: '#',
  }
];

const projects2024 = [
  {
    name: 'Spider robotic arm',
    src: spi2024_1,
    description: 'Spider Robotic arm is the ultimate teleoperation companion!',
    link: '#',
  },
  {
    name: 'UHUGV',
    src: spi2024_2,
    description: 'UHUGV is an amphibious robot designed to navigate across both land and underwater environments.',
    link: '#',
  },
  {
    name: '90nm 8T Subthreshold SRAM Design',
    src: spi2024_3,
    description: 'A 90nm 8T subthreshold SRAM design for ultra-low power memory operation.',
    link: '#',
  }
];

// You can add more projects for other years in this format
const projects2022 = [
  {
    name: 'SECURISE',
    src: spi1,
    description: "Developed an Automatic Number Plate Recognition System for our college campus that logs entrance and exit of vehicles • Designed a vehicle data extraction pipeline from the ground up, using a FasterRCNN implementation with Resnet101 for vehicle data extraction • Working on implementing a frontend and backend to relay data between the camera and the system.",
    link: '#',
  },
  {
    name: 'RECAL UAE Admin portal',
    src: spi2,
    description: 'Admin Portal for the Alumni Association UAE Chapter. Handles data updation, deletion and provides analytics on the data of RecalUAE.',
    link: '#',
  },
  {
    name: 'Document requisition portal',
    src: spi3,
    description: 'The system aims to provide an easy experience for students to request approval on certificates. A unified portal allows both students and administrators to log in using institute credentials to either send or approve requests. The portal handles all the required student information, forms, and receipts to make the process as streamlined as possible for administrators. Functionality is provided for administrators to approve/reject requests in a single click and view student information and required documents on a single interface.',
    link: '#',
  },
  {
    name: 'Happy hunt challenge',
    src: spid4,
    description: 'Happy Hunt Challenge is a PWA React Application built for a Scavenger Hunt game conducted by Event Specials in Pune. The app has 1500+ users who need to solve missions (clues) scattered all over Pune. The website has two portals, one for the Admin and another for end-users. The admin portal has features like auto evaluation, admin evaluation, adding or updating the missions, feed control, etc. The end-user interface consists of a portal to check clues and submit answers to the clues after reaching a particular location. If their submissions are accepted, then the players are awarded points, and their submissions get auto-posted in the feed, where other players can react to it by liking or sharing. The project uses the MERN stack.',
    link: '#',
  }
];

const allProjects = {
  2023: projects2023,
  2024: projects2024,
  2022: projects2022,
};


function Spider() {
  const [year, setYear] = useState('2024'); 
  const [currentProject, setCurrentProject] = useState(allProjects[2024][0]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showYearSelector, setShowYearSelector] = useState(false);

  const projectData = allProjects[year];

  const nextProject = () => {
    const nextIndex = (currentIndex + 1) % projectData.length;
    setCurrentIndex(nextIndex);
    setCurrentProject(projectData[nextIndex]);
  };

  const prevProject = () => {
    const prevIndex = (currentIndex - 1 + projectData.length) % projectData.length;
    setCurrentIndex(prevIndex);
    setCurrentProject(projectData[prevIndex]);
  };

  const changeYear = (selectedYear) => {
    setYear(selectedYear);
    setCurrentIndex(0);
    setCurrentProject(allProjects[selectedYear][0]);
    setShowYearSelector(false);
  };

  return (
    <div className="project-slider-container">
      <div className="project-title">
        <img className="image-slider h-[100px] w-[100px]" src={spi4} alt="Club Logo" />
        <h1>SPIDER</h1>
      </div>

      <div className="row">
        <div className="flex justify-center">
          <button
            className="bg- bordergrey-[solid_2px_black] text-blue h-[40px] w-[90px] m-5 rounded-lg text-center"
            onClick={() => changeYear('2024')}
          >
            2024
          </button>

          <button
            onClick={() => changeYear('2023')}
            className="bg-grey border-[solid_2px_black] text-blue h-[40px] w-[90px] m-5 rounded-lg text-center"
          >
            2023
          </button>

          {/* Button to open the year selector dropdown */}
          <button
            className="bg-grey border-[solid_2px_black] text-blue h-[40px] w-[150px] m-5 rounded-lg"
            onClick={() => setShowYearSelector(!showYearSelector)}
          >
            All Years
          </button>
        </div>
      </div>

      {/* Dropdown or modal for year selection */}
      {showYearSelector && (
        <div className="">
          {Object.keys(allProjects).map((yearOption) => (
            <button
              key={yearOption}
              onClick={() => changeYear(yearOption)}
              className="bg-gray-200 text-blue h-[40px] w-[80px] m-2 rounded-lg"
            >
              {yearOption}
            </button>
          ))}
        </div>
      )}

      <div className="project-box">
        <button className="slider-button-left" onClick={prevProject}>
          {'<'}
        </button>

        <img className="image-slider" src={currentProject.src} alt={currentProject.name} />
        
        <div className="column">
          <h2 className="project-name">{currentProject.name}</h2>
          <div className="project-description">
            {currentProject.description.split('\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>

        <button className="slider-button-right" onClick={nextProject}>
          {'>'}
        </button>
      </div>
    </div>
  );
}

export default Spider;
