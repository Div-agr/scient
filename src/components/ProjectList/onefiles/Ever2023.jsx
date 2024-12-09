import React,{useState} from 'react';
import '../../../styles/AllProj.css';
import ev1 from '../../../assets/ev-23-1.png';

import { ever } from '../../../assets';

const projects23 = [
    {
        name: 'AUTO SELECTION OF AVAILABLE PHASE IN 3- PHASE SUPPLY SYSTEM',
        src: ev1,
        description: "EVER is a team of NIT Trichy students dedicated to developing Electric Vehicles and promoting Electric Mobility. The team provides a real-world work environment with the goal of racing homegrown EVs in student-level competitions. EVER is more than just a racing team; it's a community. The projects offer a platform to showcase and test innovative ideas and technologies. \n This project aims at delivering a system that provides uninterrupted power supply to the load even in the absence of any phase in a three phase supply system. In this system auto selection is achieved by using a set of relays interconnected in such a way that if one of the relays is feeding to the load remains energized always.",
        link: '#',
    }
];

const allProjects = {
    2023: projects23,
};

function Ever2023() {
    const [year, setYear] = useState('2023'); 
    const [currentProject, setCurrentProject] = useState(allProjects[2023][0]);
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
          <img className="image-slider h-[100px] w-[100px]" src={ever} alt="Club Logo" />
          <h1>EVER</h1>
        </div>
  
        <div className="row">
          <div className="flex justify-center">
  
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

export default Ever2023