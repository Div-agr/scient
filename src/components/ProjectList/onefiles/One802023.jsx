import React,{useState} from 'react';
import '../../../styles/AllProj.css';
import one1 from '../../../assets/180-23-1.png';
import one2 from '../../../assets/180-23-2.png';
import one3 from '../../../assets/180-23-3.jpg';
import one4 from '../../../assets/180-23-4.png';

import { oedc } from '../../../assets';

const projects23 = [
    {
        name: 'Team everest',
        src: one1,
        description: 'About the company - Team Everest is an Indian NGO that promotes volunteerism and improves educational access for underprivileged children. They provide educational support and mentorship, empowering children from disadvantaged backgrounds. \n Engagement - Capital Budgeting, Analyze KPIs to track Beneficiaries',
        link: '#',
    },
    {
        name: 'The bill & Melinda gates foundation',
        src: one2 ,
        description: 'About the company - The Bill & Melinda Gates Foundation is a philanthropic organization striving to enhance healthcare and agriculture, reduce extreme poverty, and expand educational opportunities. \n Engagement - KPI Tracking and Evaluation framework Data Analysis',
        link: '#',
    },
    {
        name: 'Raptee energy',
        src: one3 ,
        description: 'About the company - Raptee Energy, an innovative EV startup, stole the spotlight at the recent Global Investors Meet (GIM) in Chennai,. E-bike is set to be launched in June 2024, with an aim to create a Premium yet affordable brand. \n Engagement - Branding Strategies Premium Customer Experience',
        link: '#',
    },
    {
        name: 'GalaxEye space',
        src: one4 ,
        description: "About the company - GalaxEye Space. World's first multi sensor imaging. Satellite. Technology. We are building the world's first multi sensor imaging satellite for earth observation purposes to gather unique insights. \n Engagement - Strategy for New Product launch, Competitive analysis Customer persona mapping",
        link: '#',
    }
];

const allProjects = {
    2023: projects23,
};

function One802023() {
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
          <img className="image-slider h-[100px] w-[100px]" src={oedc} alt="Club Logo" />
          <h1>180 DC</h1>
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

export default One802023