import React, { useState } from 'react';
import '../../../styles/AllProj.css';
import fhl1 from '../../../assets/pic1.jpg';

import { fh } from '../../../assets';

const projects24 = [
    {
        name: 'name1',
        src: fhl1,
        description: 'Force Hyperloop is the official Hyperloop team of the National Institute of Technology, Tiruchirappalli (NIT Trichy). Driven by innovation and the vision to revolutionize transportation in India, the team consists of dedicated students from various disciplines. With a focus on cutting-edge technology, interdisciplinary collaboration, and hands-on experience, Force Hyperloop is at the forefront of developing high-speed transportation solutions. \n The team actively participates in global competitions and research initiatives, pushing the boundaries of engineering and design to make sustainable, energy-efficient, and rapid transit systems a reality in India.',
        link: '#',
    }
];

const allProjects = {
    2024: projects24,
};

function Fhl2023() {
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
          <img className="image-slider h-[100px] w-[100px]" src={fh} alt="Club Logo" />
          <h1>FORCE HYPERLOOP</h1>
        </div>
  
        <div className="row">
          <div className="flex justify-center">
            <button
              className="bg- bordergrey-[solid_2px_black] text-blue h-[40px] w-[90px] m-5 rounded-lg text-center"
              onClick={() => changeYear('2024')}
            >
              2024
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
          <div className="year-selector">
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

export default Fhl2023